var slideshow = {
  photoList: ['Lions', 'Tigers', 'Bears'],
  currentPhotoIndex: 0,
  nextPhoto: function () {
    if (this.currentPhotoIndex < this.photoList.length -1) {
      this.currentPhotoIndex++
      console.log(this.photoList[this.currentPhotoIndex])
      return this.photoList[this.currentPhotoIndex]
    } else {
      this.pause();
      return console.log('End of slideshow');
    }
  },
  prevPhoto: function () {
    if (this.currentPhotoIndex - 1 > -1) {
      this.currentPhotoIndex--
      return this.photoList[this.currentPhotoIndex]
    } else {
      return 'Beginning of slideshow';
    }
  },
  getCurrentPhoto: function () {
    return this.photoList[this.currentPhotoIndex]
  },
  playInterval: null,
  play: function () {
    var self = this
    this.playInterval = setInterval(function () {
      //console.log(self.nextPhoto())
      return self.nextPhoto()
    }, 2000);
  },
  pause: function () {
    clearInterval(this.playInterval)
  }
}
slideshow.play();