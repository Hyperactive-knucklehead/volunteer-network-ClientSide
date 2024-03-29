import styled from "styled-components";

export const ForbiddenWrapper = styled.div`
  position: relative;
  max-width: 1298px;
  height: auto;
  margin: 2em auto 0 auto;
  background: transparent
    url("https://www.dropbox.com/s/qq5n8w99q40wtrg/wood-fence.png?raw=1")
    no-repeat center top 24em;
  @media screen and (max-width: 600px) {
    background-size: 300px 114px;
    background-position: center top 22em;
    p:first-of-type {
      margin-top: 12em;
    }
  }
  h1 {
    margin: 0 0 1rem 0;
    font-size: 8em;
    text-shadow: 0 0 6px #8b4d1a;
  }
  p {
    margin-bottom: 0.5em;
    font-size: 1.75em;
    color: #ea8a1a;
  }
  p:first-of-type {
    margin-top: 16em;
    text-shadow: none;
  }
  > a {
    border-bottom: 1px dashed #837256;
    font-style: italic;
    text-decoration: none;
    color: #837256;
  }
  > a:hover {
    text-shadow: 0 0 3px #8b4d1a;
  }
  img {
    vertical-align: bottom;
  }
`;

export const ForbiddenBox = styled.div`
  max-width: 70%;
  min-height: 600px;
  margin: 0 auto;
  padding: 1em 1em;
  text-align: center;
  background: transparent
    url("https://www.dropbox.com/s/ft9vhk6720t1k86/dog-family-colored-doodle-drawing.jpg?raw=1")
    no-repeat top 10em center;

  @media screen and (max-width: 600px) {
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
    background-size: 320px 185px;
  }
`;
