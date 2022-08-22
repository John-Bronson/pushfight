class Board {
  constructor() {
    let x = 'x'
    let l = 'l'
    let r = 'r'
    let o = 'o'

    let tiles = {
      x: 'openSpace.png',
      l: 'leftWall.png',
      r: 'rightWall.png',
      o: 'openSpace.png',
      p: 'pawn.png',
      r: 'rook.png,',
      c: 'crownedRook.png'
    }

    this.data = [
      [x, x, x, x, x, x], //row 0
      [x, x, o, o, x, x], //row 1
      [l, o, o, o, x, x], //row 2
      [l, o, o, o, o, r], //row 3
      [l, o, o, o, o, r], //row 4
      [l, o, o, o, o, r], //row 5
      [l, o, o, o, o, r], //row 6
      [x, x, o, o, o, r], //row 7
      [x, x, o, o, x, x], //row 8
      [x, x, x, x, x, x], //row 9
    ]
  }

  displayBoard() {
    console.log('PUSHFIGHT BOARD:\n')

    for (const row of this.data) {
      for (const cell of row) {
        process.stdout.write(cell)
      }
      process.stdout.write('\n')
    }

  }

}

let thisBoard = new Board()
thisBoard.displayBoard()