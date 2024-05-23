import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { slug } = useParams();

  return (
    <MainLayout>
      <h1>Profile-{slug}</h1>
    </MainLayout>
  );
};

export default Profile;
