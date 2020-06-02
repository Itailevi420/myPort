import React, { useContext } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import PortfolioContext from "../../context/context";
import LogoImg from "../Image/LogoImg";
// import GithubButtons from '../GithubButtons/GithubButtons';

// import { githubButtons } from '../../mock/data';

const NavBar = () => {
  const { navbar } = useContext(PortfolioContext);
  const { net, logoImg, logoAlt } = navbar;
  // const { isEnabled } = githubButtons;

  return (
    // <Container>
    <Navbar style={{ background: "#00cdac" }} expand="md" sticky="top">
      <Navbar.Brand href="/">
        <LogoImg filename={logoImg} alt={logoAlt} />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="navbarRespond" />
      <Navbar.Collapse id="navbarRespond">
        <Nav className="mr-auto">
          {/* <Nav as="ul"> */}
          {/* <Nav.Item as="li"> */}
          {net &&
            net.map(item => {
              const { name, url } = item;
              return (
                // eslint-disable-next-line jsx-a11y/anchor-has-content
                <Nav.Link href={url}>{name}</Nav.Link>
              );
            })}
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // </Container>
  );
};

export default NavBar;
// to loop over the urls
/*  {/* <div className="social-links">
{networks &&
  networks.map(network => {
    const { id, name, url } = network;
    return (
      <a
        key={id}
        href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={name}
      >
        <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
      </a>
    );
  })}
</div> }
*/
