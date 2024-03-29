
import './App.css';
import Customer from './component/Customer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

const customers = [
  {
  id : 1,
  image: 'https://placeimg.com/64/64/any',
  name : '홍길동',
  birthday : '961222',
  gender : '남자',
  job : '대학생'
},
{
  id : 2,
  image: 'https://placeimg.com/64/64/2',
  name : '남여운',
  birthday : '961333',
  gender : '남자',
  job : '백수'
},
{
  id : 3,
  image: 'https://placeimg.com/64/64/3',
  name : '계백',
  birthday : '961222',
  gender : '여자',
  job : '대학생'
}
]

function App() {
  
  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
        <TableHead>
          <TableCell>번호</TableCell>
          <TableCell>이미지</TableCell>
          <TableCell>이름</TableCell>
          <TableCell>생년월일</TableCell>
          <TableCell>성별</TableCell>
          <TableCell>직업</TableCell>
        </TableHead>
        <TableBody>
          {
            customers.map(c => {
              return (
                <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.gender} />
              );
            })
          }
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles) (App);
