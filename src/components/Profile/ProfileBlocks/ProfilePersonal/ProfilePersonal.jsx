import React from 'react';

import Input from '../../../UI/Input/Input';
import Button from '../../../UI/Button/Button';

import './ProfilePersonal.scss';

export default function ProfilePersonal() {
  return (
    <div className="personal-block">
      <div className="personal__wrapper">
        <div className="personal__verification">
          <div className="personal__verification__header">Verification</div>
          <div className="personal__verification__content">
            <div className="personal__verification__upload-button">
              <svg width="65" height="81" fill="none">
                <path
                  opacity="0.5"
                  d="M12.773 80.594h39.454c8.046 0 12.304-4.336 12.304-12.422V35.359H36.367c-4.531 0-6.758-2.226-6.758-6.797V.165H12.773C4.727.164.43 4.461.43 12.586v55.586c0 8.125 4.258 12.422 12.343 12.422zm24.61-50.82H64.14c-.157-1.758-1.485-3.438-3.477-5.43L40.547 3.954C38.672 2.038 36.953.71 35.195.515v27.07c0 1.445.703 2.187 2.188 2.187zM32.5 70.983c-1.836 0-3.398-1.406-3.398-3.203V56.414l.351-5.195-2.539 2.617-2.852 2.93c-.585.586-1.445 1.015-2.226 1.015-1.758 0-3.047-1.25-3.047-2.89 0-.977.352-1.641 1.094-2.305l10-9.219c.86-.781 1.64-1.133 2.617-1.133.938 0 1.719.352 2.617 1.133l10 9.219c.703.625 1.055 1.328 1.055 2.305 0 1.64-1.29 2.89-3.047 2.89-.82 0-1.64-.43-2.227-1.015l-2.812-2.93-2.54-2.617.313 5.195v11.367c0 1.797-1.523 3.203-3.359 3.203z"
                  fill="#222426"
                />
              </svg>
              <p className="personal__verification__name">Upload Password</p>
              <label htmlFor="passwordID">Upload Document</label>
              <input id="passwordID" name="passwordID" type="file" />
            </div>
          </div>
        </div>
        <div className="personal__change-password">
          <div className="personal__change-password__header">
            Change Password
          </div>
          <form action="">
            <Input
              main
              htmlFor="oldPassword"
              id="oldPassword"
              labelText="Enter old password"
              placeholderText="Old password"
            />
            <Input
              main
              htmlFor="newPassword"
              id="newPassword"
              labelText="Enter new password"
              placeholderText="New password"
            />
            <Input
              main
              htmlFor="newPassword"
              id="newPassword"
              labelText="Enter new password again"
              placeholderText="New password"
            />
            <Button main>Save new password</Button>
          </form>
        </div>
      </div>
      <div className="personal__info">
        <div className="personal__info__header">Information</div>
        <form action="">
          <div className="personal__info__defaultFields">
            <Input main labelText="Email" value="user_email" disabled />
            <Input main labelText="Login" value="user_login" disabled />
            <Input main labelText="First Name" value="user_firstName" disabled />
            <Input main labelText="Last Name" value="user_lastName" disabled />
            <Input main labelText="Birth Date" value="user_birthDate" disabled />
            <Input main labelText="Gender" value="user_gender" disabled />
          </div>
          <div className="personal__info__activeFields">
            <Input main labelText="Phone" placeholderText="Phone" />
            <Input main labelText="Country" placeholderText="Country" />
            <Input main labelText="City" placeholderText="City" />
            <Input main labelText="Address" placeholderText="Address" />
            <Input main labelText="ZIP" placeholderText="ZIP-code" />
          </div>
          <Button main>Save details</Button>
        </form>
      </div>
    </div>
  );
}
