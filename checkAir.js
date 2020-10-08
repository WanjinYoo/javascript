const checkAir = function (samples, threshold) {
  // Code here!
 let checking = {
 	clean : 0,
 	dirty : 0
 };
 let percentage = 0;
for(let i = 0; i < samples.length; i++){
	if(samples[i] === 'clean'){
		checking.clean +=1;
	}
	else{
		checking.dirty +=1;
	}
}
 percentage = checking.dirty / (checking.clean + checking.dirty);
 if(percentage > threshold){
 	return "polluted";
 }
 else{
 	return "clean";
 }


};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))