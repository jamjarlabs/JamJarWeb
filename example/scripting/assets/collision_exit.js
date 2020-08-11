const gameRef = window.JamJarRefs.get("scripting");

const entity = gameRef.GetScriptEntity();

const primitive = entity.Get("primitive");

primitive.material.color.red = 0;
primitive.material.color.green = 1;
primitive.material.color.blue = 0;
