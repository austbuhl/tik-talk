import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.35;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-right: 1px solid lightgray;

  .header-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 10vw;
  }

  /* .header-right > .MuiSvgIcon-root {
    margin-right: 2vw;
    font-size: 24px !important;
  } */
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  height: 39px;
  padding: 10px;

  .search-container {
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 35px;
    border-radius: 20px;
  }

  .search-container > .MuiSvgIcon-root {
    color: gray;
    padding: 10px;
  }

  .search-container > input {
    border: none;
    outline-width: 0;
    margin-left: 10px;
    width: 80%;
  }
`

export const SidebarChatContainer = styled.div`
  flex: 1;
  background-color: white;
  overflow: scroll;
`
