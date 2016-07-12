class Activity {

  set name(name : String) {this._name = name;}
  get name() : String {return this._name;}

  set category(category: String) {this._category = category;}
  get category() : String {return this._category;}
  
  set from(val : Date) {this._from = val;}
  get from() : Date {return this._from;}
  
  set to(val: Date) {this._to = val;}
  get to(): Date {return this._to;}
  
  set uid(uid: String) {this._uid = uid;}
  get uid() : String {return this._uid;}

  constructor(activity : string) {

    const index = activity.indexOf('@');
    if (index === -1) {
      this.name = activity;
    } else {
      this.name = activity.substring(0, index);
      this.category = activity.substring(index + 1, activity.length);
    }

    this.from = new Date();
    this.to = null;
  }
  
  toObject() : object {
    return {
      name: this.name,
      category: this.category,
      from: this.from.getTime(),
      to: this.to == null ? null : this.to.getTime(),
      uid: this.uid
    };
  }
}

export default Activity;