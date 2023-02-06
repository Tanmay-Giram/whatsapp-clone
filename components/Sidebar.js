import Avatar from "react-avatar";
import styled from "styled-components";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChatIcon from '@mui/icons-material/Chat';
import { Button ,IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search'

function Sidebar() {
  const createChat = () => {
    const input = prompt(
      'please enter email address'
    )
    if (!input) return null;
    
  };
  return (
    <Container>
      <Header>
              <UserAvatar/>
                <IconsContainer>
                  <IconButton>
                  <ChatIcon />
                  </IconButton>
                  <IconButton>
                  <MoreVertIcon />
                  </IconButton>
                </IconsContainer>
      </Header>
      <Search>
        <SearchIcon />
        <SearchInput placeholder="Search In Chats"/>
      </Search>
      <SidebarButton onClick={createChat}>start a new chat</SidebarButton>
      {/*list of chats*/}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;
const SidebarButton = styled(Button)`
width:100%;
&&&{
  border-top: 1px solid whitesmoke ;
border-bottom: 1px solid whitesmoke;

}

`;

const Header = styled.div`
display :flex;
position: sticky;
top :0;
background-color:white;
z-index: 1;
justify-content:space-between;
align-items:center;
padding:15px;
height:80px;
border-bottom:1px solid whitesmoke
`;

const UserAvatar = styled(Avatar)`
cursor:pointer;
:hover{
  opacity:0.8;
}`;

const IconsContainer = styled.div``;
const Search = styled.div`
display:flex;
align-items:center;
padding:20px;
border-radius:2px`;
const SearchInput = styled.input`
outline-width:0;
border:0;
flex:1;
`;