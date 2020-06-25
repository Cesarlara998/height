class Base {
	constructor(Model,Columns) {
		this.Model = Model
		this.Columns = Columns
	}
	async selectAll() {
		return await this.Model.findAll().then(users => {
  console.log("All users:", JSON.stringify(users, null, 4));
});
	}
}
module.exports = { Base }

// this.Model.findAll({
// 			attributes: this.Columns
// 		})