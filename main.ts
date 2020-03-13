namespace SpriteKind {
    export const key = SpriteKind.create()
    export const key2 = SpriteKind.create()
    export const key3 = SpriteKind.create()
    export const portal = SpriteKind.create()
    export const key4 = SpriteKind.create()
    export const key5 = SpriteKind.create()
    export const key6 = SpriteKind.create()
    export const set1 = SpriteKind.create()
    export const portal2 = SpriteKind.create()
    export const key7 = SpriteKind.create()
    export const key9 = SpriteKind.create()
    export const key8 = SpriteKind.create()
    export const portal3 = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e f e e e e e 
f f f f f f f f e f f f f f f f 
e e e e e e e f f f e e e e e e 
e e f e e e e e e e e e e f e e 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e f e e e e e 
e e e e e e e e e e e e e e e e 
f f f f f f f f e e f f f f f f 
e e e e e e e f f f f e e e e e 
e e e e e e e e e e e e e e e e 
e e e f e e e e e e e e e e e e 
e e e e e e e e e e e e e f e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e f e e 
`
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal3, function (sprite, otherSprite) {
    level_changer_2()
})
function key_8 () {
    kay_8 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    kay_8.setPosition(539, 700)
    kay_8.say("Key 8")
    kay_8.setKind(SpriteKind.key8)
}
function beginning_credits () {
    game.splash("You have been brought back to the past.  ")
    game.splash("Navigate your way through 4 levels for the 12 keys and escape back to the present! ")
    game.splash("The first 3 keys are located throughout this first map.")
    game.splash("One on the left and two on the right", "")
    game.splash("Use ^ to move up, S to move down, and < and > to move Left and Right. ")
    game.splash("Beware, you're not the only one here...")
    game.splash("Beware, you're not the only one here...")
    game.splash("Level 1 is the past where you will get pins for a future award to the alternate future universe.")
    game.splash("Level 2 the alternate future where you will attempt to gather the next 3 keys to unlock the business award which will transport you to the fake present, but not your home.")
    game.splash("Level 3 is where you will attempt to escape he building in the present. Beating this level will get you the leader award and will unlock one last portal to your home where you will attempt to get the next keys for the america award.")
    game.splash("Level 3 is where you will attempt to escape he building in the present. Beating this level will get you the america award and will unlock one last portal to your home where you will attempt to clean up your room to get the america award.")
    game.splash("In Level 4, you will make one last run through a maze to finally make it back to the real world and home.")
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key8, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kay_8.destroy()
})
function portal_3 () {
    portal3 = sprites.create(img`
. . . . f f f f f a a a a f f f f . . . 
. . . . f 9 9 9 a 9 9 9 9 9 9 9 f . . . 
. . . . f 9 a a a a 9 9 a 9 9 9 f . . . 
. . . . f 9 9 9 5 a a a 5 a 9 9 f . . . 
. . . . f 9 9 5 a a a 7 7 a 9 9 f . . . 
. . . . f 9 9 a a 5 5 5 5 a 5 9 f . . . 
. . . . f 9 5 a a a a a 5 a a 9 f . . . 
. . . . f 9 5 7 5 9 a 9 5 7 a 9 f . . . 
. . . . f 9 5 a a a 7 7 5 7 a 9 f . . . 
. . . . f 9 5 a a a a 5 5 7 a 9 f . . . 
. . . . f 9 5 7 5 a a 5 5 7 a 9 f . . . 
. . . . f 9 5 7 a 5 7 7 7 a 5 9 f . . . 
. . . . f 9 a a 5 9 5 7 7 a 9 9 f . . . 
. . . . f 9 a a a 5 9 5 5 a 9 9 f . . . 
. . . . f 9 9 5 7 a a a a a 9 9 f . . . 
. . . . f 9 9 5 7 a a a a a 9 9 f . . . 
. . . . f 9 9 a a 7 7 5 a 9 9 9 f . . . 
. . . . f 9 9 9 a a a a a 9 9 9 f . . . 
. . . . f 9 9 9 9 9 a a 7 5 9 9 f . . . 
. . . . f f f f f f f f f f f f f . . . 
`, SpriteKind.portal)
    portal3.setPosition(175, 300)
    portal3.setKind(SpriteKind.portal3)
}
function level4 () {
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f 
f f f f f f f f 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 f f 
f f f f f f f f 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 f f 
f f f f f f f f 7 . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . 7 f f 
f f f f f f f f 7 . . 7 f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 . . . . . . . . 7 f f 
f f f f f f f f 7 . . 7 f f f f f f f f f f f f f f f f f f f f f f f f f f 7 . . . . . . . 7 7 f f 
f f f f f f f f 7 . . 7 f f f f f f f f f f f f f f f f f f f f f f f f f f 7 7 . . . . . . 7 f f f 
f f 7 7 7 7 7 7 7 . . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f 7 . . . . . 7 7 f f f 
f f 7 . . . . . . . . . . . . . . . . . . . . . . 7 f f f f f 7 7 7 7 f f f f 7 7 . . . . 7 f f f f 
f f 7 . . . . . . . . . . . . . . . . . . . . . . 7 f f f f f 7 . . 7 f f f f f 7 . . 7 7 7 f f f f 
f f 7 7 7 7 7 7 7 . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 7 f f f f f 7 . . 7 f f f f f 7 . . 7 7 f f f f f 
f f f f f f f f 7 . . 7 f f f f f f f f f f 7 . . 7 f f f f f 7 . . 7 f f f f f 7 . . 7 f f f f f f 
f f f f f f f f 7 . . 7 f f f f f f f f f f 7 . . 7 f f f f f 7 . . 7 f f f f f 7 . . 7 f f f f f f 
f f f f f f 7 7 7 . . 7 7 7 f f f f f f f f 7 . . 7 f f f f f 7 . . 7 f f f f f 7 . . 7 f f f f f f 
f f f f f f 7 . . . . . . 7 7 7 7 7 7 7 7 7 7 . . 7 7 7 7 7 7 7 . . 7 7 7 7 7 7 7 . . 7 7 7 7 7 7 f 
f f f f f f 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 f 
f f 7 7 7 7 7 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 7 7 f 
f f 7 . . . . . . . . . . 7 7 7 7 7 7 7 . . . 7 7 7 7 7 7 7 7 7 . . 7 7 7 7 7 7 7 . . 7 7 7 7 7 7 f 
f f 7 . . . . . . . . . . 7 f f f f f 7 . . . 7 f f f f f f f 7 . . 7 f f f f f 7 . . 7 f f f f f f 
f f 7 . . 7 7 7 7 . . . 7 7 f f f f f 7 . . . 7 f f f f f f f 7 . . 7 f f f f 7 7 . . 7 7 7 7 7 f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f 7 . . . 7 f f f f f f f 7 . . 7 f f f f 7 . . . . . . . 7 f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f 7 . . . 7 f f f f f f f 7 . . 7 f f f f 7 . . . . . . . 7 f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f 7 . . . 7 f f f f f f f 7 . . 7 f f f 7 7 . . . . . . . 7 f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f 7 . . . 7 f f f f f f f 7 . . 7 f f f 7 . . . . . . . . 7 f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f 7 . . . 7 f f f f f f f 7 . . 7 f f f 7 . . . . . . . . 7 f f 
f f 7 . . 7 f f 7 . . . 7 7 7 7 7 7 7 7 . . . 7 7 7 7 7 f f f 7 . . 7 f f 7 . . . . . . . . . 7 f f 
f f 7 . . 7 f f 7 . . . . . . . . . . . . . . . . . . 7 f f f 7 . . 7 f f 7 . . . . . . . . . 7 f f 
f f 7 . . 7 f f 7 . . . . . . . . . . . . . . . . . . 7 f f f 7 . . 7 f f 7 . . . . . . . . 7 7 f f 
f f 7 . . 7 f f 7 . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 7 f f f 7 . . 7 f f 7 . . . . . . . . 7 f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f 7 . . . . . . . 7 7 f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f 7 7 . . . . . . 7 f f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f f 7 . . . . . 7 7 f f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f f 7 . . . . . 7 f f f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f f 7 7 . . . . 7 f f f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f f f 7 . . . . 7 f f f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f f 7 7 . . . . 7 f f f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f f 7 . . . . . 7 f f f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f f 7 . . . . . 7 7 f f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f 7 7 . . . . . 7 7 f f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f 7 . . . . . . . 7 7 f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f 7 . . . . . . . . 7 f f f 
f f 7 . . 7 f f 7 . . . 7 f f f f f f f f f f f 7 . . 7 f f f 7 . . 7 f f 7 . . . . . . . . 7 f f f 
f f 7 . . 7 f f 7 . . . 7 7 7 7 7 7 7 7 7 7 7 7 7 . . 7 f f f 7 . . 7 f f 7 . . . . . . . . 7 f f f 
f f 7 . . 7 f f 7 . . . . . . . . . . . . . . . . . . 7 f f f 7 . . 7 f f 7 . . . . . . . . 7 f f f 
f f 7 . . 7 f f 7 . . . . . . . . . . . . . . . . . . 7 7 7 7 7 . . 7 f f 7 7 . . . . . . . 7 f f f 
f f 7 7 7 7 f f 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . 7 f f f 7 7 7 7 . . . . 7 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 7 . . . . . . . . . 7 f f f f f f 7 7 7 7 7 7 f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 7 7 7 7 7 7 7 7 7 7 7 f f f f f f f f f f f f f f f 
`)
    scene.setTile(7, img`
8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 
8 8 1 8 8 8 8 1 8 8 1 1 1 1 1 1 
8 8 8 8 1 8 8 8 8 8 2 2 2 2 2 2 
8 8 8 8 8 8 8 1 8 8 1 1 1 1 1 1 
8 1 8 8 1 8 8 8 8 8 1 1 1 1 1 1 
8 8 8 8 8 8 8 1 8 8 2 2 2 2 2 2 
8 8 8 8 8 8 8 8 8 8 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, true)
    scene.setTile(0, img`
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
`, false)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal2, function (sprite, otherSprite) {
    level_changer()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key3, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kay_3.destroy()
})
function bad_guy () {
    // This creates the villlan and spawns him in specific
    // position.
    Villan = sprites.create(img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . . . . 
. . . . . . 1 f f 1 f f 1 . 1 1 . 
. . . . . . 1 1 1 1 1 1 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . 2 e 2 2 2 2 e 2 . f 1 1 
. . . . 2 2 2 e 2 2 e 2 2 d d . . 
. . . d d 2 2 2 e e 2 2 d d f . . 
. . d d 2 2 2 2 e e 2 2 2 . . . . 
. . d . . 2 2 2 e e 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . . 8 8 . . 8 8 . . . . . 
. . . . . f f f . . f f f . . . . 
`, SpriteKind.Player)
    Villan.setPosition(400, 825)
    Villan.follow(Carlos, 75)
    Villan.setKind(SpriteKind.Enemy)
}
function portal_2 () {
    portall2 = sprites.create(img`
. . . . f f f f f f f f f f f f f . . . 
. . . . f 9 9 9 9 9 9 9 9 9 9 9 f . . . 
. . . . f 9 9 9 9 9 9 9 9 9 9 9 f . . . 
. . . . f 9 9 9 5 5 5 5 5 9 9 9 f . . . 
. . . . f 9 9 5 7 7 7 7 7 5 9 9 f . . . 
. . . . f 9 9 5 7 5 5 5 5 7 5 9 f . . . 
. . . . f 9 5 7 7 5 9 9 5 7 5 9 f . . . 
. . . . f 9 5 7 5 9 9 9 5 7 5 9 f . . . 
. . . . f 9 5 7 5 9 7 7 5 7 5 9 f . . . 
. . . . f 9 5 7 5 7 7 5 5 7 5 9 f . . . 
. . . . f 9 5 7 5 7 7 5 5 7 5 9 f . . . 
. . . . f 9 5 7 5 5 7 7 7 7 5 9 f . . . 
. . . . f 9 5 7 5 9 5 7 7 5 9 9 f . . . 
. . . . f 9 9 5 7 5 9 5 5 9 9 9 f . . . 
. . . . f 9 9 5 7 5 9 9 9 9 9 9 f . . . 
. . . . f 9 9 5 7 7 5 9 9 9 9 9 f . . . 
. . . . f 9 9 9 5 7 7 5 9 9 9 9 f . . . 
. . . . f 9 9 9 9 5 7 7 5 9 9 9 f . . . 
. . . . f 9 9 9 9 9 5 7 7 5 9 9 f . . . 
. . . . f f f f f f f f f f f f f . . . 
`, SpriteKind.portal)
    portall2.setPosition(175, 300)
    portall2.setKind(SpriteKind.portal2)
}
function main_character () {
    // This makes my sprite
    Carlos = sprites.create(img`
. . . . . f f f f f . . . . . . . 
. . . . f f d d d f f . . . . . . 
. . . . f d 1 d 1 d f . . . . . . 
. . . . d d f d f d d . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d f d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . 5 5 5 5 5 . . . . . . . 
. . . . 5 5 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . . 
. . . 5 . 5 5 5 5 5 . 5 . . . . . 
. . . 5 . 5 5 5 5 5 . 5 . . . . . 
. . . d . 5 5 5 5 5 . d . . . . . 
. . . . . 8 8 8 8 8 . . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . . 
. . . . . 8 8 . 8 8 . . . . . . . 
. . . . f f f . f f f . . . . . . 
`, SpriteKind.Player)
    // This moves my sprite
    controller.moveSprite(Carlos, 90, 90)
    // This set's my sprite's postion/spawn point
    Carlos.setPosition(400, 750)
    Carlos.setKind(SpriteKind.Player)
    // This follows the sprite
    scene.cameraFollowSprite(Carlos)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    // This organizes the amount of animations
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f . . . . . . . . 
. . . . . d f f f f . . . . . . . 
. . . . . 1 d f f f f . . . . . . 
. . . . . f d f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . f 8 8 8 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . f f f f f . . . . . . 
`, img`
. . . . . f f f f . . . . . . . . 
. . . . . d f f f f . . . . . . . 
. . . . . 1 d f f f f . . . . . . 
. . . . . f d f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 5 d 5 . . . . . . 
. . . . . . . 5 5 5 d . . . . . . 
. . . . . . . 5 5 5 . d . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . f 8 8 8 . . . . . . . 
. . . . . . . 8 8 f f . . . . . . 
. . . . . . . f f f . . . . . . . 
`, img`
. . . . . f f f f . . . . . . . . 
. . . . . d f f f f . . . . . . . 
. . . . . 1 d f f f f . . . . . . 
. . . . . f d f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 5 5 5 . . . . . . 
. . . . . . . 5 d 5 5 . . . . . . 
. . . . . . . 5 5 d 5 . . . . . . 
. . . . . . . 5 5 5 d . . . . . . 
. . . . . . . 5 5 5 . d . . . . . 
. . . . . f . 8 8 8 . . . . . . . 
. . . . . . f 8 8 8 . . . . . . . 
. . . . . . . 8 8 f f . . . . . . 
. . . . . . . . f f . . . . . . . 
`],
    100,
    true
    )
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . 1 1 . 1 f f 1 1 1 1 . . . . 
. . 1 1 f . 1 1 1 1 1 1 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 2 . . . . 
. . . . d d 2 2 2 2 2 2 2 . . . . 
. . . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f . f f . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. 1 1 1 . . 1 1 1 1 1 1 1 . . . . 
. 1 1 f f . 2 2 2 2 2 2 1 . . . . 
. . 1 1 f . 2 2 2 2 2 2 2 . . . . 
. . . . d d 2 2 2 2 2 2 2 . . . . 
. . . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f 8 8 8 . . . . . 
. . . . . . . . . . f f . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . . . . . 1 f f 1 1 1 1 . . . . 
. . 1 . . . 1 1 1 1 1 1 1 . . . . 
. 1 1 f . . 2 2 2 2 2 2 1 . . . . 
. 1 1 1 f . 2 2 2 2 2 2 2 . . . . 
. 1 1 . d d 2 2 2 2 2 2 2 . . . . 
. 1 . . f d d 2 2 2 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . f f f f 8 f f . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
// This will annimate the sprite based on what button
// is pressed
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . d . . . d d d d . . d . . . . 
. . d d . . 5 5 5 5 . d d . . . . 
. . . d d 5 5 5 5 5 5 d . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f 8 8 . . . . . . . 
. . . . . . . . f f . . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f d d d f f f . . . . . 
. . . . f d 1 d 1 d f f . . . . . 
. . . . f d f d f d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . d 5 5 5 5 5 5 d . . . . . 
. . . d d . 5 5 5 5 . d d . . . . 
. . . d . . 5 5 5 5 . . d . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
function Key6 () {
    kay_6 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    kay_6.setPosition(75, 600)
    kay_6.say("Key 6")
    kay_6.setKind(SpriteKind.key6)
}
function key_9 () {
    kay_9 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    kay_9.setPosition(345, 530)
    kay_9.say("Key 9")
    kay_9.setKind(SpriteKind.key9)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key2, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kays_2.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key5, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kay_5.destroy()
    kay_5.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.portal, function (sprite, otherSprite) {
    level += 1
    Carlos.say("Where am I ?", 1000)
    portall.destroy(effects.fire, 5000)
})
function background () {
    // This creates the whole map.
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f 
f b e e b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b f 
f b e e b b b b b b b b b b b b b b b b b f f b b b b b b b b b b b b b b b b b b b b b b b b f b f 
f b e e a a a e e e e e e e e e e e e e b f f b e e e e e e e e e e e e e e e e e e e e e e b f b f 
f b e e a a a e e e e e e e e 3 e e e 3 b f f b e e e e e e e e e e e e e e e e e e e e e e b f b f 
f b e e b b b b b b b b b b b b b b e e b f f b e e b b b b b b b b b b b b b b b b b b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b b b b b b b b b b b b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b 3 e b f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e 3 b f f b e e b b b b b b b b b e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f b e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b b b b b b b b b e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e e e e e e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e e e e 3 e e b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e 3 e e b b b b b b b f f b e e b f f f f f f f b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e b f f f f f f f f b e e b b b b b b b b b e e b e e e b f b e e b f b f 
f b e e b f f f f b e e e e b f f f f f f f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f b b b b b b f f f f f f f f b e e e e e e e e e e e e e b e e e b f b e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b b b b b b b b b e e b e e e b b b e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e e e e e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e e e e e e b f b f 
f b e e b f f f f f f f f f f f f f f f f f f b e e b e e e e e e e b e e b e e e b b b e e b f b f 
f b e e b b b b b b b b b b b b b b b b b b b b e e b e e e e e e e b e e b e e e b f b e e b f b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e b e e e e e e e b e e b e e e b f b e e b f b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e b e e e e e e e b b b b e e e b f b e e b f b f 
f b e e b b b b b b b e e b b b b b b b b b b b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e e e e e e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e b b b b e e b f b e e b f b f 
f b e e b b b b b b b e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e e e e e e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e e e e e e e b f f f f f f f f f b e e b e e e e e e e e b e e b e e b f b e e b f b f 
f b e e b e e b b b b e e b b b b b b b b b b b e e b b b b b b b b b b e e b e e b f b b b b f b f 
f b e e b e e b e e b e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e b f f f f f f b f 
f b e e b e e b e e b e e e e e e e e e e e e e e e e e e e e e e e e e e e b e e b b b b b b b b f 
f b e e b e e b e e b e e b b b b b b b b b b b e e b b b b b b b b b b e e b e e e e e e e e b b f 
f b e e b e e b e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e e e e e e e b b f 
f b e e b e e e e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e b b b b b b b b f 
f b e e b e e e e e b e e b b b b b b b b b b b e e b e e e e e e e e e e e b e e b f f f f f f b f 
f b e e b b b b b b b e e b b b b b b b b b b b e e b b b b b b b b b b b b b e e b b b b b b b b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b f 
f b e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e e b b f 
f b b b b b b b b b b b b b b b b b b b b b b b e e b b b b b b b b b b b b b b b b b b b b b b b f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f b e e b f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    scene.setTile(11, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b 1 1 1 1 1 1 b b b b b b b b b 
1 1 b b b b b 1 1 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 1 b b b b b b b b b b 
b b b b b 1 1 1 1 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`, true)
    // This will add a specific design to the colored
    // coded block.
    scene.setTile(14, img`
e f e e e e e e e e e e e e e e 
e e e e e e e e e e e f e e e e 
e e f f f f f f e e e e e e e e 
f f e e e e e e f f f e e e e e 
f e e e f e e e e e e f f f f f 
e e e e e e e e e e e e e e e e 
f f f f f f f f e f e e e e e e 
f e e e e e e f f f f f f f f f 
e e e e e e f e e e e e e e e e 
e e e e e e e e e e e e f e e e 
f f f f f f f f f f e e e f f f 
e f e e e e e e e f f f f f e e 
e e e e e e f e e e e e e e e e 
f f f f f f f f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e f e e e 
`, false)
}
function level3 () {
    scene.setTileMap(img`
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 
9 9 9 9 9 9 9 9 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 9 9 
9 9 9 9 9 9 9 9 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 9 9 
9 9 9 9 9 9 9 9 1 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d d d d 1 9 9 
9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 d d d d d d d d 1 9 9 
9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d d d d d d 1 1 9 9 
9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 d d d d d d 1 9 9 9 
9 9 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d d d d 1 1 9 9 9 
9 9 1 d d d d d d d d d d d d d d d d d d d d d d 1 9 9 9 9 9 1 1 1 1 9 9 9 9 1 1 d d d d 1 9 9 9 9 
9 9 1 d d d d d d d d d d d d d d d d d d d d d d 1 9 9 9 9 9 1 d d 1 9 9 9 9 9 1 d d 1 1 1 9 9 9 9 
9 9 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 1 1 1 1 1 d d 1 9 9 9 9 9 1 d d 1 9 9 9 9 9 1 d d 1 1 9 9 9 9 9 
9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 9 1 d d 1 9 9 9 9 9 1 d d 1 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 9 1 d d 1 9 9 9 9 9 1 d d 1 9 9 9 9 9 9 
9 9 9 9 9 9 1 1 1 d d 1 1 1 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 9 1 d d 1 9 9 9 9 9 1 d d 1 9 9 9 9 9 9 
9 9 9 9 9 9 1 d d d d d d 1 1 1 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 9 
9 9 9 9 9 9 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 9 
9 9 1 1 1 1 1 d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d d 1 1 9 
9 9 1 d d d d d d d d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 1 d d 1 1 1 1 1 1 9 
9 9 1 d d d d d d d d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 9 1 d d 1 9 9 9 9 9 9 
9 9 1 d d 1 1 1 1 d d d 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 1 1 d d 1 1 1 1 1 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 1 d d d d d d d 1 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 9 1 d d d d d d d 1 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 1 1 d d d d d d d 1 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 1 d d d d d d d d 1 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 1 d d d d d d d d 1 9 9 
9 9 1 d d 1 9 9 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 9 9 9 1 d d 1 9 9 1 d d d d d d d d d 1 9 9 
9 9 1 d d 1 9 9 1 d d d d d d d d d d d d d d d d d d 1 9 9 9 1 d d 1 9 9 1 d d d d d d d d d 1 9 9 
9 9 1 d d 1 9 9 1 d d d d d d d d d d d d d d d d d d 1 9 9 9 1 d d 1 9 9 1 d d d d d d d d 1 1 9 9 
9 9 1 d d 1 9 9 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 1 9 9 9 1 d d 1 9 9 1 d d d d d d d d 1 9 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 1 d d 1 9 9 1 d d d d d d d 1 1 9 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 1 1 1 1 1 1 9 1 d d 1 9 9 9 1 d d 1 9 9 1 1 d d d d d d 1 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 1 d d d d 1 9 1 d d 1 9 9 9 1 d d 1 9 9 9 1 1 d d d d 1 1 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 1 d d d d 1 9 1 d d 1 9 9 9 1 d d 1 9 9 9 9 1 1 1 1 1 1 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d 1 1 9 9 9 1 d d d d 1 9 1 d d 1 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d d 1 1 1 1 1 d d d d 1 9 1 d d 1 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d d d d d d d d d d d 1 9 1 d d 1 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d d d d d d d d d d d 1 9 1 d d 1 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d 1 1 1 1 1 1 1 1 1 1 1 9 1 d d 1 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d 1 9 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d 1 1 9 9 9 9 9 9 9 9 9 9 1 d d 1 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d 1 1 1 1 1 1 1 1 1 1 1 1 1 d d 1 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d d d d d d d d d d d d d d d d 1 9 9 9 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 d d 1 9 9 1 d d d d d d d d d d d d d d d d d d 1 1 1 1 1 d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 1 1 1 1 9 9 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d d d d d d d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 d d d d d d d d d 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 1 1 1 1 1 1 1 1 1 1 1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
`)
    scene.setTile(1, img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 9 9 9 1 9 9 9 9 1 9 9 9 1 1 
1 1 9 9 9 1 9 9 9 9 1 9 9 9 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 9 9 9 1 9 9 9 9 1 9 9 9 1 1 
1 1 9 9 9 1 9 9 9 9 1 9 9 9 1 1 
1 1 9 9 9 1 9 9 9 9 1 9 9 9 1 1 
`, true)
    scene.setTile(13, img`
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
d d d 1 d d d d d d d 1 d d d d 
`, false)
    portal_3()
    key_7()
    key_8()
    key_9()
    Villan.follow(Carlos, 110)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    // This subtracts the main character's life by 1 when
    // touched by villain sprite
    info.changeLifeBy(-1)
    Carlos.destroy()
    main_character()
    Villan.follow(Carlos, 80)
})
// This function creates the 1/3 keys and positions
// them in 3 specific places.
function key_1 () {
    kays = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.key)
    kays.setPosition(500, 400)
    kays.say("Key 1")
    kays.setKind(SpriteKind.key)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    // This will delete the key as the character has
    // collected them.
    kays.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.key9, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kay_9.destroy()
})
function lEvel_2 () {
    // This creates the whole map.
    scene.setTileMap(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f 2 f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f 
f f 2 f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f 2 2 2 2 f f f f f f f f f f f f f f f 
f f 2 f f f f f f f f f f f f f f f f f f f f f f 2 f f f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 2 f f f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f 2 f f f f f f f f f f 2 f f 2 f f f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f f f f f f f 2 f f 2 f f f f f f f f f f 2 f f 2 f f f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f f f f f 2 2 2 f f 2 2 2 f f f f f f f f 2 f f 2 f f f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f f f f f 2 f f f f f f 2 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 2 f f f 
f f f f f f 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f 
f f 2 2 2 2 2 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 2 f f f 
f f 2 f f f f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f f 2 2 2 2 2 2 2 2 2 2 f f 2 f f f 
f f 2 f f f f f f f f f f 2 f f f f f f f f f f f f f f f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 2 2 2 f f f 2 2 f f f f f f f f f f f f f f f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f f f f f f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f f f f f f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f f f f f f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f f f f f f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f f f f f f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 2 2 2 2 2 f f f 2 2 2 2 2 2 2 f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f f f f f f f f f f f f f f f f 2 f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f f f f f f f f f f f f f f f f 2 f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 2 2 2 2 2 f f f 2 2 2 2 f f 2 f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f 2 f f 2 f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f 2 f f 2 f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f 2 f f 2 f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f 2 f f 2 f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f 2 f f 2 f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f 2 f f 2 f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 f f f f f f f f f f f 2 f f 2 f f f 2 f f 2 f f f f f f f f 2 f f 2 f f f 
f f 2 f f 2 f f 2 f f f 2 2 2 2 2 2 2 2 2 2 2 f 2 f f 2 f f f 2 f f 2 f f f f f f f f 2 2 2 2 f f f 
f f 2 f f 2 f f 2 f f f f f f f f f f f f f 2 f 2 f f 2 f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f 2 f f 2 f f 2 f f f f f f f f f f f f f 2 f 2 f f 2 f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f 2 f f 2 f f 2 2 2 2 2 2 2 2 2 2 2 2 f f 2 f 2 f f 2 f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f 2 f f 2 f f f f f f f f f f f f f 2 f f 2 f 2 f f 2 f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f 2 f f 2 f f f f f f f f f f f f f 2 f f 2 f 2 f f 2 f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f 2 f f 2 f 2 2 2 2 f f f f f f f f 2 f f 2 f 2 f f 2 f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f 2 f f 2 f 2 f f 2 f f f f f f f f 2 f f 2 f 2 f f 2 f f f 2 f f 2 f f f f f f f f f f f f f f f 
f f 2 f f 2 f 2 f f 2 2 2 2 2 2 2 2 2 2 f f 2 f 2 f f 2 2 2 2 2 f f 2 f f f f f f f f f f f f f f f 
f f 2 2 2 2 f 2 f f f f f f f f f f f f f f 2 f 2 f f f f f f f f f 2 f f f f f f f f f f f f f f f 
f f f f f f f 2 f f f f f f f f f f f f f f 2 f 2 f f f f f f f f f 2 f f f f f f f f f f f f f f f 
f f f f f f f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f 2 2 2 2 2 2 2 2 2 2 2 f f f f f f f f f f f f f f f 
`)
    scene.setTile(2, img`
f f f 2 2 2 f f f 2 2 2 f f f 2 
f f f 2 2 2 f f f 2 2 2 f f f 2 
f f f 2 2 2 f f f 2 2 2 f f f 2 
2 2 2 f f f 2 2 2 f f f 2 2 2 f 
2 2 2 f f f 2 2 2 f f f 2 2 2 f 
2 2 2 f f f 2 2 2 f f f 2 2 2 f 
f f f 2 2 2 f f f 2 2 2 f f f 2 
f f f 2 2 2 f f f 2 2 2 f f f 2 
f f f 2 2 2 f f f 2 2 2 f f f 2 
2 2 2 f f f 2 2 2 f f f 2 2 2 f 
2 2 2 f f f 2 2 2 f f f 2 2 2 f 
2 2 2 f f f 2 2 2 f f f 2 2 2 f 
f f f 2 2 2 f f f 2 2 2 f f f 2 
f f f 2 2 2 f f f 2 2 2 f f f 2 
f f f 2 2 2 f f f 2 2 2 f f f 2 
2 2 2 f f f 2 2 2 f f f 2 2 2 f 
`, true)
    portal_2()
    key_4()
    Key6()
    Key5()
    Villan.follow(Carlos, 100)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key4, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kay_4.destroy()
    kay_4.destroy()
})
function key_2 () {
    kays_2 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.key)
    kays_2.setPosition(100, 550)
    kays_2.say("Key 2")
    kays_2.setKind(SpriteKind.key2)
}
function level_changer_2 () {
    if (info.score() == 9) {
        level += 1
    }
}
function Key_unlocks () {
    // If the score is 3, the wall that was locked
    // previously is now walk-able
    if (info.score() == 3) {
        scene.setTile(10, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 b b 
b b b b b b b b b b b b b b 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 b b b b b b 
b b b b b b b b b 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b 1 1 1 1 1 1 
`, false)
        scene.setTile(3, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e f f f f f f e e e f f e e e e 
f f e e e e f f f f f e f f f f 
f e e e e e e e e e 3 3 e e e e 
e e e e 3 e e e e e e 3 3 3 e e 
e e e e 3 3 e e e e e e e 3 3 e 
f e e e e 3 3 e e e e e e e e e 
f f f f f f 3 f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e 3 e e e e e e 3 f f f e e e 
f f 3 f f f f 3 3 3 f e f f f f 
e e 3 e e e e e e e e e e e e e 
e e 3 e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, false)
    } else {
        scene.setTile(10, img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 1 1 1 b b 
b b b b b b b b b b b b b b 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 b b b b b b 
b b b b b b b b b 1 1 1 1 1 1 1 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
1 1 1 1 1 b b b b b b b b b b b 
b b b b 1 1 1 1 1 1 1 b b b b b 
b b b b b b b b b b 1 1 1 1 1 1 
`, true)
        scene.setTile(3, img`
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e f f f f f f e e e f f e e e e 
f f e e e e f f f f f e f f f f 
f e e e e e e e e e 3 3 e e e e 
e e e e 3 e e e e e e 3 3 3 e e 
e e e e 3 3 e e e e e e e 3 3 e 
f e e e e 3 3 e e e e e e e e e 
f f f f f f 3 f f f f f f f f f 
e e e e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
e e 3 e e e e e e 3 f f f e e e 
f f 3 f f f f 3 3 3 f e f f f f 
e e 3 e e e e e e e e e e e e e 
e e 3 e e e e e e e e e e e e e 
e e e e e e e e e e e e e e e e 
`, true)
    }
}
function key_3 () {
    kay_3 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    kay_3.setPosition(500, 625)
    kay_3.say("Key 3")
    kay_3.setKind(SpriteKind.key3)
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . 8 8 8 f . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . f f f f . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 d 5 5 . . . . . . . 
. . . . . . d 5 5 5 . . . . . . . 
. . . . . d . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . . . 8 8 f f . . . . . . 
. . . . . . f 8 8 . . . . . . . . 
. . . . . . f f f . . . . . . . . 
`,img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f d . . . . . . 
. . . . f f f f f d 1 . . . . . . 
. . . . f f f f d d f . . . . . . 
. . . . . d d d d d d . . . . . . 
. . . . . d d d d d . . . . . . . 
. . . . . . d d d . . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 d 5 . . . . . . . 
. . . . . . 5 d 5 5 . . . . . . . 
. . . . . . d 5 5 5 . . . . . . . 
. . . . . d . 5 5 5 . . . . . . . 
. . . . . . . 8 8 8 . . . . . . . 
. . . . . f . 8 8 f f . . . . . . 
. . . . . f f 8 8 . . . . . . . . 
. . . . . . f f . . . . . . . . . 
`],
    100,
    true
    )
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . 1 1 . 
. . . . . . 1 1 1 1 1 1 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d . . 
. . . . . . 2 2 2 2 2 2 d d f . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f . f f f . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . f 
. . . . . . 1 1 1 1 1 1 1 . . f 1 
. . . . . . 2 2 2 2 2 2 1 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d . . 
. . . . . . 2 2 2 2 2 2 d d f . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 f f f . . . . 
. . . . . . f f f . . . . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 f f 1 . . . . 
. . . . . . 1 1 1 1 1 1 1 . . f . 
. . . . . . 2 2 2 2 2 2 1 . f 1 f 
. . . . . . 2 2 2 2 2 2 2 . f 1 1 
. . . . . . 2 2 2 2 2 2 2 d d 1 1 
. . . . . . 2 2 2 2 2 2 d d f . 1 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 2 2 2 d 2 2 2 . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f 8 f f f . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
function key_7 () {
    kay_7 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    kay_7.setPosition(425, 700)
    kay_7.say("Key 7")
    kay_7.setKind(SpriteKind.key7)
}
function key_4 () {
    kay_4 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    kay_4.setPosition(470, 625)
    kay_4.say("Key 4")
    kay_4.setKind(SpriteKind.key4)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key7, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kay_7.destroy()
})
function level_changer () {
    if (info.score() == 6) {
        level += 1
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.key6, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    kay_6.destroy()
    kay_6.destroy()
})
function Portal () {
    portall = sprites.create(img`
. . . . f f f f f f f f f f f f f . . . 
. . . . f f 2 2 f 2 2 f 2 2 f 2 f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f f 2 2 f 2 2 f 2 2 f 2 f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f f 2 2 f 2 2 f 2 2 f 2 f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f f 2 2 f 2 2 f 2 2 f 2 f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f f 2 2 f 2 2 f 2 2 f 2 f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f f 2 2 f 2 2 f 2 2 f 2 f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f 2 f f 2 f f 2 f f 2 f f . . . 
. . . . f f 2 2 f 2 2 f 2 2 f 2 f . . . 
`, SpriteKind.portal)
    portall.setPosition(175, 300)
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Carlos,
    [img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . . 
. . . . . d f f f f d . . . . . . 
. . . . . d f f f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . 5 5 5 5 5 5 . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . d 5 5 5 5 d . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
`, img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . . 
. . . . . d f f f f d . . . . . . 
. . . . . d f f f d d . . . . . . 
. . . d . . d d d d . . . d . . . 
. . . d d . 5 5 5 5 . . d d . . . 
. . . . d 5 5 5 5 5 5 d d . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 f f . . . . . . . 
. . . . . . f f . . . . . . . . . 
`, img`
. . . . . f f f f f f . . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f f . . . . . 
. . . . f f f f f f f . . . . . . 
. . . . . d f f f f d . . . . . . 
. . . . . d f f f d d . . . . . . 
. . . . . . d d d d . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . d 5 5 5 5 5 5 d . . . . . 
. . . d d . 5 5 5 5 . d . d . . . 
. . . d . . 5 5 5 5 . d d . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 5 5 5 5 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . 8 8 8 8 . . . . . . . 
. . . . . . f f f f . . . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
    animation.runImageAnimation(
    Villan,
    [img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . 1 1 . 
. . . . . . 1 1 1 1 1 1 . . 1 1 . 
. . . . . . 2 2 2 2 2 2 . . f 1 . 
. . . . . . 2 2 2 2 2 2 f d . . . 
. . . . . 2 2 2 2 2 2 2 2 d . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f f f f . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 2 2 2 2 2 2 . . f 1 1 
. . . . . . 2 2 2 2 2 2 f d . 1 1 
. . . . . 2 2 2 2 2 2 2 2 d . 1 1 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . d . 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 f f f . . . . . 
. . . . . . f f f . . . . . . . . 
`,img`
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . . . 
. . . . . . 1 1 1 1 1 1 . . . 1 1 
. . . . . . 1 1 1 1 1 1 . . . 1 1 
. . . . . . 2 2 2 2 2 2 . . f 1 1 
. . . . . . 2 2 2 2 2 2 f d . . . 
. . . . . 2 2 2 2 2 2 2 2 d . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . d 2 2 2 2 2 2 . . . . . 
. . . . . . 2 2 2 2 2 2 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . 8 8 8 8 8 8 . . . . . 
. . . . . . f f f f f f . . . . . 
. . . . . . . . . . . . . . . . . 
`],
    100,
    true
    )
})
function Key5 () {
    kay_5 = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 1 . . . . 1 1 . . . 
. . . . . . 1 1 . . 1 1 . . . . 
. . . 1 1 . . . . . . . . 1 . . 
. . . . 1 1 . . . . . . 1 1 . . 
. . . . . . 5 . . . . . . . . . 
. 1 1 . . 5 . 5 5 5 5 . . . . . 
. . . . . . 5 . . . 5 . . . . . 
. . . . . . . . . . . . 1 . . . 
. . . 1 . . . . . . . . . 1 . . 
. . 1 1 . . . . . . . . . . 1 . 
. 1 1 . . . . 1 1 . . . . . . . 
. . . . . . . . . 1 1 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Food)
    kay_5.setPosition(475, 700)
    kay_5.say("Key 5")
    kay_5.setKind(SpriteKind.key5)
}
let kay_7: Sprite = null
let kay_4: Sprite = null
let kays: Sprite = null
let portall: Sprite = null
let kay_5: Sprite = null
let kays_2: Sprite = null
let kay_9: Sprite = null
let kay_6: Sprite = null
let portall2: Sprite = null
let Carlos: Sprite = null
let Villan: Sprite = null
let kay_3: Sprite = null
let portal3: Sprite = null
let kay_8: Sprite = null
beginning_credits()
main_character()
background()
// This will call the functions that I create
bad_guy()
key_1()
key_2()
key_3()
// This sets the score to 0
info.setScore(0)
// This starts the user's lives as 5
info.setLife(5)
let level = 1
Portal()
game.onUpdate(function () {
    if (level == 2) {
        lEvel_2()
        level = 0
    }
    if (level == 3) {
        level3()
        level = 0
    }
    if (level == 4) {
        level4()
        level = 0
    }
})
game.onUpdate(function () {
    // This will make the user be able to unlock the walls
    // by collecting the keys.
    Key_unlocks()
})
forever(function () {
    music.playMelody("E B C5 A B G A D ", 240)
})
