import styled from "styled-components";

export default styled.div`

  display: grid;
  grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 60px 2fr 1fr;
    place-items:center;
    height:100vh;
    grid-template-areas:
        "x x"
        "a b"
        "c d";
        
        #welcomeuser{
          grid-area:x;
          display:flex;
          place-self:center start;
          background: yellow;
          width:100%;
          height:100%;

          p{
            margin:15px;
          }
        }

        #customerlist{
          grid-area: b;
          place-self:center center;
        }
        #createcustomer{
          grid-area:a;
          place-self:center center;

          form {
            grid-row-gap: 20px;
            grid-column-gap:20px;

            div{
              display:grid;
              place-self: center;
           input {
             place-self:center;
           }
            }
            button {
              place-self: center;
              grid-column-end: 3;
              grid-column-start: 1;
            }

          }

        } 
`;

