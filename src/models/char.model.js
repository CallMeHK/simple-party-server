// char-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function(app) {
  const mongooseClient = app.get("mongooseClient");
  const { Schema } = mongooseClient;
  const char = new Schema(
    {
      name: { type: String, required: true },
      playerId: { type: String, required: true },
      partyId: {type: String, required: true },
      hp:{
        total:{ type:Number, required:true },
        current:{ type:Number, required:true }
      },
      feats: [{ name: String, detail: String }],
      spell: [{name: String, level: String, detail: String}],
      details: { type: String, required: true },
      stats: {
        str: { type: Number, required: true },
        dex: { type: Number, required: true },
        con: { type: Number, required: true },
        int: { type: Number, required: true },
        wis: { type: Number, required: true },
        cha: { type: Number, required: true }
      }
    },
    {
      timestamps: true
    }
  );

  return mongooseClient.model("char", char);
};
