function Cylinder(cylinderDiameter, cylinderHeight) {
  this.diameter = cylinderDiameter;
  this.height = cylinderHeight;

  this.getVolume = function() {
    let radius = this.diameter / 2;
    return (Math.PI * radius**2 * this.height).toFixed(2);
  }
}

// let cylinder = new Cylinder(8, 10);
// console.log(cylinder.getVolume())


const diameter = document.querySelector('#cyl-diameter');
const height = document.querySelector('#cyl-height');
const bttn = document.querySelector('button');
const result = document.querySelector('#result');

bttn.addEventListener('click', (e) => {
  e.preventDefault();


  let cylinder = new Cylinder(diameter.value, height.value);
  result.innerText = cylinder.getVolume();
});