import { Dropdown, Avatar } from "flowbite-react";
import React from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

export const UserAvatar = ({ username, email, avatar }) => {
  const { logOut, setLoading } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    setLoading(true);
    await logOut();
    navigate("/");
    setLoading(false);
  };
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label={
        <Avatar alt="User settings" img={avatar ? avatar : null} rounded />
      }
    >
      <Dropdown.Header>
        {/* <span className="block text-sm">{username}</span> */}
        {username !== "" ? (
          <span className="block text-sm">{username}</span>
        ) : null}

        <span className="block truncate text-sm font-medium">{email}</span>
      </Dropdown.Header>
      <Dropdown.Divider />
      <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
    </Dropdown>
  );
};
