import { Header, StyleLink } from './Navigation.styled';

export const Navigaion = () => {
  return (
    <Header className="">
      <StyleLink to="/">Home</StyleLink>
      <StyleLink to="/movies">Movies</StyleLink>
    </Header>
  );
};
