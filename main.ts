player.onChat("run", function () {
    blocks.print(
    "Trade Center",
    RED_SHULKER_BOX,
    positions.add(
    player.position(),
    pos(5, 7, 5)
    ),
    EAST
    )
    blocks.fill(
    LIGHT_BLUE_GLAZED_TERRACOTTA,
    positions.add(
    player.position(),
    pos(0, -1, 0)
    ),
    positions.add(
    player.position(),
    pos(5, 5, 5)
    ),
    FillOperation.Outline
    )
    blocks.fill(
    OBSERVER,
    positions.add(
    player.position(),
    pos(3, 0, 5)
    ),
    positions.add(
    player.position(),
    pos(5, 1, 5)
    ),
    FillOperation.Replace
    )
})
player.say("1.type run")
