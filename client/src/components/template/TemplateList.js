import React, { useEffect, useState } from "react"
import GrainIcon from "@material-ui/icons/Grain"
import LocalFloristIcon from "@material-ui/icons/LocalFlorist"
import ListItemText from "@material-ui/core/ListItemText"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Collapse from "@material-ui/core/Collapse"
import ExpandLess from "@material-ui/icons/ExpandLess"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { makeStyles, useMediaQuery, Typography } from "@material-ui/core"
import { Link } from "react-router-dom"
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  title: {
    "& > *": {
      fontSize: 13,
    },
  },
  linkText: {
    fontSize: 13,
    width: theme.spacing(18),
    overflow: "hidden",
    textOverflow: "ellipsis",
    height: 20,
    [theme.breakpoints.down("650")]: {
      fontSize: 12,
      width: 90,
      height: 15,
    },
  },
  clieckedItem: {
    backgroundColor: "#ccc",
  },
}))

const useInput = (initVal) => {
  const [value, setValue] = useState(initVal)
  return { value }
}

export default function NestedList({
  isTemplateAddSucceed,
  isTemplateEditSucceed,
  isTemplateDeleteSucceed,
  getTemplateList,
  clearAddResult,
  clearEditResult,
  clearDeleteResult,
  handleIndex,
  templates,
}) {
  console.log("리스트 그리기")
  const classes = useStyles()
  const [clieckedIndex, setClieckedIndex] = useState()
  const matches = useMediaQuery("(min-width:800px)")
  const [open, setOpen] = React.useState(false)

  // 텃밭추가 시 텃밭리스트 불러오기
  useEffect(() => {
    console.log("여기")
    if (isTemplateAddSucceed) {
      getTemplateList()
      clearAddResult()
    }
  }, [isTemplateAddSucceed])

  // 텃밭수정 시 텃밭리스트 불러오기
  useEffect(() => {
    if (isTemplateEditSucceed) {
      console.log("수정")
      getTemplateList()
      clearEditResult()
    }
  }, [isTemplateEditSucceed])

  // 텃밭삭제 시 텃밭리스트 불러오기
  useEffect(() => {
    if (isTemplateDeleteSucceed) {
      getTemplateList()
      clearDeleteResult()
    }
  }, [isTemplateDeleteSucceed])

  const handleClick = () => {
    setOpen(!open)
  }
  // 텃밭 클릭시 사이드바 clickedIndex값 변경
  const onIndexSubmit = () => {
    handleIndex(setClieckedIndex)
  }

  return (
    <div>
      <ListItem button onClick={handleClick}>
        {matches ? (
          <ListItemIcon>
            <GrainIcon />
          </ListItemIcon>
        ) : (
          ""
        )}
        <ListItemText primary="토마토 텃밭" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {templates.map((template, index) => (
            <Link
              className={classes.link}
              key={index}
              to={{
                pathname: `template`,
                state: {
                  template,
                },
              }}
            >
              <ListItem
                button
                className={clieckedIndex === index ? classes.clieckedItem : ""}
                onClick={() => {
                  setClieckedIndex(index)
                  onIndexSubmit()
                }}
              >
                <ListItemIcon>
                  <LocalFloristIcon />
                </ListItemIcon>
                <ListItemText className={classes.title}>
                  <Typography noWrap className={classes.linkText}>
                    {template.templateName}
                  </Typography>
                </ListItemText>
              </ListItem>
            </Link>
          ))}
        </List>
      </Collapse>
    </div>
  )
}
