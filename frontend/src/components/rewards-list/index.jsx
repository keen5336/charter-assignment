import React from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import useRewardsList from './rewards-list'

const RewardsList = ({ dataset }) => {
  const { renderData } = useRewardsList(dataset)
  return (
    <List
        sx={{
            width: '100%',
            bgcolor: 'background.paper',
            position: 'relative',
            overflow: 'auto',
            maxHeight: 300,
            '& ul': { padding: 0 },
        }}
        subheader={<li />}
    >
      {renderData.map((data) => (
        <li key={`section-${data.month}`}>
          <ul>
            <ListSubheader><h2>{`${data.month} - ${data.points} Points This Month`}</h2></ListSubheader>
            {data.transactions.map((transaction) => (
              <ListItem key={`${transaction.timestamp}-${transaction.purchase}-${transaction.points}`}>
                <ListItemText primary={`Date: ${transaction.timestamp}`} />
                <ListItemText primary={`Purchase Amount: $${transaction.purchase}`} />
                <ListItemText primary={`Points Earned: ${transaction.points}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  )
}

export default RewardsList
