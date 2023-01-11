import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { cleanUserDetail, editUser } from "../redux/actions";
import { useHistory } from "react-router";

import {
  ButtonForm,
  ErrorsForm,
  ImageAndInfoContainer,
  InfoContainer,
} from "../styles/CreateBook";
import {
  UserEditContainer,
  UserPic,
  ButtonDisable,
  FieldContainer,
  Field,
  H3Field,
} from "../styles/EditUser";

export default function EditUser({ setModal }) {
  const dispatch = useDispatch();

  const history = useHistory();

  const user = useSelector((state) => state.userDetail);

  function close(e) {
    e.preventDefault();
    dispatch(cleanUserDetail());
    setModal(false);
  }

  function handleDisable(e) {
    e.preventDefault();

    if (
      window.confirm(
        user.banned
          ? "Are you sure you want to reactivate this account?"
          : "Are you sure you want to disable this account?"
      )
    ) {
      dispatch(editUser({ id: user.id, banned: !user.banned }));

      console.log(user.banned);
      toast.warning(
        user.banned ? "Account has been activated" : "Account has been disabled"
      );
    }
    setModal(false);
  }

  return (
    <UserEditContainer>
      {!user.active && (
        <div style={{ alignSelf: "center" }}>
          <ErrorsForm>*the current Account is disabled</ErrorsForm>
        </div>
      )}
      <ImageAndInfoContainer>
        <UserPic alt="" />
        <InfoContainer>
          <FieldContainer>
            <Field>
              <H3Field>User Name</H3Field>
              <H3Field>{user.userName}</H3Field>
            </Field>
            <Field>
              <H3Field>Email</H3Field>
              <H3Field>{user.email}</H3Field>
            </Field>
          </FieldContainer>
          <FieldContainer>
            <Field>
              <H3Field>Subscription</H3Field>
              <H3Field>{user.subscription ? "ACTIVE" : "INACTIVE"}</H3Field>
            </Field>
            <Field>
              <H3Field>Plan</H3Field>
              <H3Field>
                {user.subscription ? user.subscription.plan : "-"}
              </H3Field>
            </Field>
          </FieldContainer>
          <FieldContainer>
            <Field>
              <H3Field>Start Date</H3Field>
              <H3Field>
                {user.subscription ? user.subscription.startDate : "-"}
              </H3Field>
            </Field>
            <Field>
              <H3Field>Finish Date</H3Field>
              <H3Field>
                {user.subscription ? user.subscription.finishDate : "-"}
              </H3Field>
            </Field>
          </FieldContainer>
        </InfoContainer>
      </ImageAndInfoContainer>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ButtonDisable
          type="button"
          onClick={(e) => close(e)}
          ancho="150px"
          color="red"
          border="1px solid #ccc"
        >
          Close Form
        </ButtonDisable>
        <ButtonDisable
          type="button"
          onClick={(e) => handleDisable(e)}
          ancho="150px"
          color="red"
        >
          {user.banned ? "Activate Account" : "Disable Account"}
        </ButtonDisable>
      </div>
    </UserEditContainer>
  );
}
