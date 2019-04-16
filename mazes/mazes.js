let maze = new Array()
maze =
    [
        [
            [1,1,1,1,1,1,1,1,1,1],
            [1,9,0,0,0,0,0,0,0,1],
            [1,0,1,1,1,1,1,1,0,1],
            [1,0,1,3,1,0,0,0,0,1],
            [1,0,1,0,0,0,1,1,0,1],
            [1,0,1,0,1,1,4,1,0,1],
            [1,0,1,0,6,0,0,1,0,1],
            [1,0,1,0,1,1,1,1,0,1],
            [1,2,0,0,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,5,1]
        ],
        [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,3,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
            [1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1],
            [1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,1,6,1],
            [1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1],
            [1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
            [1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1],
            [1,0,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1],
            [1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1],
            [1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1],
            [1,0,0,1,0,1,0,1,0,0,9,1,0,1,0,1,0,1,0,1],
            [1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1],
            [1,0,0,1,0,1,0,1,0,0,0,1,2,1,0,1,0,1,0,1],
            [1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1],
            [1,0,0,1,0,1,3,0,0,0,0,0,0,0,8,6,0,1,0,1],
            [1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1],
            [1,0,0,1,8,3,0,0,0,0,0,0,0,0,0,0,0,1,4,1],
            [1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,1,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ],
        [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
            [1,9,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1],
            [1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,6,1],
            [1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,4,1],
            [1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1],
            [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1],
            [1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1],
            [1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1],
            [1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1],
            [1,0,0,0,1,0,6,2,0,0,1,0,1,0,0,0,1,0,0,1],
            [1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1],
            [1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
            [1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1],
            [1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],
            [1,1,1,1,1,1,1,1,1,6,1,1,0,1,1,1,0,1,0,1],
            [1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1],
            [1,0,1,0,1,0,1,0,1,6,1,1,0,1,0,1,1,1,1,1],
            [1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1],
            [1,3,1,0,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,1,1,1],
        ]
    ]
