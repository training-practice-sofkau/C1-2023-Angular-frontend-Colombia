import { AbstractControl } from '@angular/forms';

// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: AbstractControl) => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);
    if (control?.value !== matchingControl?.value) {
      console.log('3')
  
        matchingControl?.setErrors({ mustMatch: true });
    } else {
      console.log('4')
  
        matchingControl?.setErrors(null);
    }
    return null
   
}
}

/*return (group: AbstractControl) => {
  const control = group.get(controlName);
  const matchingControl = group.get(matchingControlName);

  if (!control || !matchingControl) {
    console.log('1')
      return null;
  }

  // return if another validator has already found an error on the matchingControl
  if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
    console.log('2')

      //return null;
  }

  // set error on matchingControl if validation fails
  if (control.value !== matchingControl.value) {
    console.log('3')

      matchingControl.setErrors({ mustMatch: true });
  } else {
    console.log('4')

      matchingControl.setErrors(null);
  }
  return null;
}*/
