export class InputHandler {
    constructor(game){
        this.game = game;
        this.keys = [];
        this.touchY = '';
        this.touchTreshold = 30;
        window.addEventListener('keydown', e => {
            if ((   
                e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter' 
            ) && this.keys.indexOf(e.key) === -1){
                this.keys.push(e.key);
                this.game.timeTrue = true;
            } else if ( e.key === 'D' || e.key === 'd') this.game.debug = !this.game.debug;
        });
        window.addEventListener('keyup', e => {
            if (
                e.key === 'ArrowDown' ||
                e.key === 'ArrowUp' ||
                e.key === 'ArrowLeft' ||
                e.key === 'ArrowRight' ||
                e.key === 'Enter'
            ){
                this.keys.splice(this.keys.indexOf(e.key),1);
            }
        });



        // #####################

        window.addEventListener('touchstart', e => {
            this.touchY = e.changedTouches[0].pageY;
            console.log(e);
          });
          window.addEventListener('touchmove', e => {
            const swipeDistance = e.changedTouches[0].pageY - this.touchY;
            if(swipeDistance < -this.touchTreshold && this.keys.indexOf('ArrowUp') === -1) this.keys.push('ArrowUp'); 
            else if (swipeDistance > this.touchTreshold && this.keys.indexOf('ArrowDown') === -1) {
            this.keys.push('ArrowDown');
          } 
          });
          window.addEventListener('touchend', e => {
            this.keys.splice(this.keys.indexOf('ArrowUp'),1);
            this.keys.splice(this.keys.indexOf('ArrowDown'),1);
          });

        //   if ((this.keys.indexOf('ArrowUp') > -1 || this.keys.indexOf('swipe up') > -1 ) && this.onGround()) {
        //     this.keys.push('ArrowUp');
        //   }
        //   if ((this.keys.indexOf('ArrowDown') > -1 || this.keys.indexOf('swipe down') > -1 ) && this.onGround()) {
        //     this.keys.push('ArrowDown');
        //   }
        // ############################
        
    }
}