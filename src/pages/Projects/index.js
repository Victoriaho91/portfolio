import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';import tileData from './tileData';
import * as projectStyles from '../../styles/projects.module.css'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 800,
    height: 500
  },
  titleBar: {
    background:
      'linear-gradient(90deg, rgb(66, 2, 194) 0%, rgb(0,78,194) 100%)',
    opacity: '0.6'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function Projects (){

  const classes = useStyles();

  return(
    <div id='projects-container' className={projectStyles.container}>
      <h2>Projects Section</h2>
      <div className={classes.root}>
      <GridList cellHeight={300}  spacing={20} className={classes.gridList}>
        <GridListTile key="Subheader" cols={3} style={{ height: 'auto'}}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            {/* <GridListTileBar className={classes.titleBar}
              title={tile.title}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <GitHubIcon />
                </IconButton>
              }
            /> */}
          </GridListTile>
        ))}
      </GridList>
    </div>

    </div>

  )
}
