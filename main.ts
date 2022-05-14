basic.forever(function () {
    if (input.acceleration(Dimension.X) == 0) {
        basic.showIcon(IconNames.No)
    } else if (input.acceleration(Dimension.X) > 0) {
        basic.showArrow(ArrowNames.East)
    } else if (input.acceleration(Dimension.X) < 0) {
        basic.showArrow(ArrowNames.West)
    }
    if (input.acceleration(Dimension.Y) == 0) {
        basic.showIcon(IconNames.No)
    } else if (input.acceleration(Dimension.Y) < 0) {
        basic.showArrow(ArrowNames.North)
    } else if (input.acceleration(Dimension.Y) > 0) {
        basic.showArrow(ArrowNames.South)
    }
})
