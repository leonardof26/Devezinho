import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`

export const Header = styled.View`
  align-items: center;
  padding-bottom: 20px;
  border-bottom-width: 1px;
  border-color: #eee;
`

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #eee;
`

export const Name = styled.Text`
  font-size: 20px;
  color: #333;
  font-weight: bold;
  margin-top: 10px;
  text-align: center;
`

export const UserRanking = styled.Text`
  font-size: 14px;
  line-height: 18px;
  color: #999;
  margin-top: 5px;
  text-align: center;
`

export const Users = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`
export const UsersInfo = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`

export const UserAvatar = styled.Image`
  height: 42px;
  width: 42px;
  border-radius: 21px;
  background: #eee;
`

export const Info = styled.View`
  margin-left: 10px;
  flex: 1;
`

export const Title = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #333;
`

export const Score = styled.Text`
  font-size: 13px;
  color: #666;
  margin-top: 2px;
`
