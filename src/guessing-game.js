class GuessingGame {
    constructor() {
        this.left = undefined
        this.right = undefined
    }

    // this method accepts min and max value of range of number to guess
    setRange(min, max) {
        this.left = min
        this.right = max
    }

    // this method returns solution candidate (you make an assumption based on range and previous assumptions)
    guess() {
        // console.log('guessing. left=', this.left)
        // turn of right binary search solution
        // this.candidate = Math.floor((this.right - this.left) / 2) + this.left
        this.candidate = Math.ceil((this.right - this.left) / 2) + this.left
        // this.print()
        return this.candidate
    }

    // this method is called if prev call of guess() returned number which is greater than answer
    lower() {
        // console.log('lower')
        // turn of right binary search solution
        // this.right = this.candidate - 1
        this.right = this.candidate
    }

    // this method is called if prev call of guess() returned number which is lower than answer
    greater() {
        // console.log('greater')
        // turn of right binary search solution
        // this.left = this.candidate + 1
        this.left = this.candidate
    }
    print() {
        console.log('='.repeat(40))
        console.log('⬅️ left =', this.left)
        console.log('⬇️ candidate =', this.candidate)
        console.log('➡️ right =', this.right)
        console.log('='.repeat(40))
    }
}

module.exports = GuessingGame;

// const number = 409;
// const game = new GuessingGame();
// game.setRange(0, 4048)

// let result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();


// console.log('Рэндж: ', 0, 4048)
// console.log('Ждем: ', number)
// console.log('Результат', result)