import React, { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Tomato from "../tomato/Tomato"
import TomatoCnt from "../tomato/TomatoCnt"
import Modals from "../common/Modal"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}))

const TomatoList = (props) => {
  console.log(props)
  const { isLogin, isTomatoDeleteSucceed, tomatos, templates } = props
  console.log(props)
  let templateIdx = props.templateIdx
  let date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
  if (!templateIdx) {
    templateIdx = 0
  } else {
    date = ""
  }
  const data = {
    date,
    templateIdx,
  }
  console.log(tomatos)
  console.log(templates)
  useEffect(() => {
    if (isLogin) {
      props.getTomatoList(data)
    }
  }, [props.templateIdx])

  useEffect(() => {
    if (isLogin) {
      props.getTomatoList(data)
      // props.clearDeleteResult();
    } else {
      props.getTempTomatoList()
    }
  }, [])

  const classes = useStyles()
  return (
    <div className={classes.root}>
      {templateIdx ? (
        <></>
      ) : (
        <>
          <TomatoCnt tomatos={tomatos}></TomatoCnt>
          <Modals addTomatos={props.addTomatos} templates={templates} type="loadTemplate" />
        </>
      )}
      {tomatos &&
        tomatos.map((tomato) => (
          <Tomato
            isLogin={isLogin}
            tomatoDelete={props.tomatoDelete}
            getTomatoList={props.getTomatoList}
            tomatoTempDelete={props.tomatoTempDelete}
            getTempTomatoList={props.getTempTomatoList}
            {...tomato}
            key={tomato.tomatoIdx}
          />
        ))}
      <Modals templateIdx={props.templateIdx} type="tomatoAdd"></Modals>
    </div>
  )
}

export default TomatoList
