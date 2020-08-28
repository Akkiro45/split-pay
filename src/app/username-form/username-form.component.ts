import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-username-form',
  templateUrl: './username-form.component.html',
  styleUrls: ['./username-form.component.css']
})
export class UsernameFormComponent implements OnInit {

  usernameValid = false;
  key: any;

  controlsForm: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.minLength(3)])
  });

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private socialAuthService: SocialAuthService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let input = this.controlsForm.value.username;
    this.authService.isFirst(input, (data) => {
      if (data.status === 404) {
        this.authService.addUser(input, (data) => {
          if (data) {
            localStorage.setItem("key", input);
            let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
            this.router.navigate([returnUrl || '/dashboard']);
          }
        });
      }
      else {
        this.controlsForm.reset();
        alert("Username already exists!! Enter another username.")
      }
    });
  }

}
