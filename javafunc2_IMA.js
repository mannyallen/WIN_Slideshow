var slideshow = {
  photoList: ['Lions', 'Tigers', 'Bears'],
  currentPhotoIndex: 0,
  nextPhoto: function () {
    if (this.currentPhotoIndex + 1 < this.photoList.length) {
      this.currentPhotoIndex++
      return this.photoList[this.currentPhotoIndex]
    } else {
      return 'End of slideshow';
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
  }
}
