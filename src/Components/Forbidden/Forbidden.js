import React from "react";
import {
  ForbiddenBox,
  ForbiddenWrapper,
} from "../StyledComponents/Forbidden403";
import { NavigationLink } from "../StyledComponents/NavMenu";
const Forbidden = () => {
  return (
    <ForbiddenWrapper>
      <ForbiddenBox>
        <h1>403</h1>
        <p>Sorry, it's not allowed to go beyond this point!</p>
        <p>
          <NavigationLink className="nav-link" to="/">
            Please, go back this way.
          </NavigationLink>
        </p>
      </ForbiddenBox>
    </ForbiddenWrapper>
  );
};

export default Forbidden;
