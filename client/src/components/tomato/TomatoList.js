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
  const { isLogin, isTomatoDeleteSucceed, isTomatoAddSucceed, tomatos, templates } = props
  const templateIdx = props.templateIdx ? props.templateIdx : 0
  const date = props.templateIdx ? "" : new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)

  const data = {
    date,
    templateIdx,
  }
  useEffect(() => {
    if (isLogin) {
      props.getTomatoList(data)
    }
  }, [templateIdx])

  useEffect(() => {
    if (isLogin) {
      props.getTomatoList(data)
      props.clearDeleteResult()
      props.clearAddResult()
    } else {
      props.getTempTomatoList()
    }
  }, [isLogin, isTomatoDeleteSucceed, isTomatoAddSucceed])

  const classes = useStyles()
  return (
    <div className={classes.root}>
      {templateIdx ? (
        <></>
      ) : (
        <>
          <TomatoCnt tomatos={tomatos}></TomatoCnt>
          {isLogin ? <Modals addTomatos={props.addTomatos} templates={templates} type="loadTemplate" /> : <></>}
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
