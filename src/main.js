import kaboom from "kaboom";
import world from "./scenes/world";

const k = kaboom({ width: 1280, height: 720, letterbox: true, global: false });

k.loadSprite("assets", "/assets/topdownasset.png", {
  sliceX: 39,
  sliceY: 31,
});
// k.loadSprite("bean", "sprites/bean.png");

// k.add([k.pos(120, 80), k.sprite("bean")]);

// k.onClick(() => k.addKaboom(k.mousePos()));

const scenes = {
  world,
};

for (const sceneName in scenes) {
  k.scene(sceneName, () => scenes[sceneName](k));
}

k.go("world");
