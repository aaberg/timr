class Activity {

  set name(name : String) {this._name = name;}
  get name() : String {return this._name;}

  set category(category: String) {this._category = category;}
  get category() : String {return this._category;}

  constructor(activity : string) {

    const index = activity.indexOf('@');
    if (index === -1) {
      this.name = activity;
    } else {
      this.name = activity.substring(0, index);
      this.category = activity.substring(index + 1, activity.length);
    }
  }
  
  toObject() : object {
    return {
      name: this.name,
      category: this.category
    };
  }
}

export default Activity;