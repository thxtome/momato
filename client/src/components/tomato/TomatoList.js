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

const TomatoList = ({
  isLogin,
  isTomatoAddSucceed,
  isTomatoEditSucceed,
  isTomatoDeleteSucceed,
  tomatos,
  templates,
  templateIdx,
  getTomatoList,
  getTempTomatoList,
  addTomatos,
  deleteTomato,
  deleteTempTomato,
  clearAddResult,
  clearEditResult,
  clearDeleteResult,
}) => {
  templateIdx = templateIdx ? templateIdx : ""
  const date = templateIdx ? "" : new Date(Date.now() - new Date().getTimezoneOffset() * 60000).toISOString().substr(0, 10)
  const data = {
    date,
    templateIdx,
  }
  console.log("렌더", data)

  // 텃밭이 바뀌면 토마토 목록 불러오기
  useEffect(() => {
    getTomatoList(data)
  }, [templateIdx])

  // 토마토 추가 시 토마토목록 다시 불러오기
  useEffect(() => {
    if (isLogin) {
      getTomatoList(data)
      clearAddResult()
    }
  }, [isTomatoAddSucceed])

  // 토마토 수정 시 토마토 목록 다시 불러오기
  useEffect(() => {
    if (isLogin) {
      getTomatoList(data)
      clearEditResult()
    }
  }, [isTomatoEditSucceed])

  // 토마토 삭제 시 토마토 목록 다시 불러오기
  useEffect(() => {
    if (isLogin) {
      getTomatoList(data)
      clearDeleteResult()
    }
  }, [isTomatoDeleteSucceed])

  const classes = useStyles()
  return (
    <div className={classes.root}>
      {templateIdx ? (
        <></>
      ) : (
        <>
          <TomatoCnt tomatos={tomatos}></TomatoCnt>
          {isLogin ? <Modals addTomatos={addTomatos} templates={templates} type="loadTemplate" /> : <></>}
        </>
      )}
      {tomatos &&
        tomatos.map((tomato) => (
          <Tomato
            isLogin={isLogin}
            deleteTomato={deleteTomato}
            getTomatoList={getTomatoList}
            deleteTempTomato={deleteTempTomato}
            getTempTomatoList={getTempTomatoList}
            {...tomato}
            key={tomato.tomatoIdx}
          />
        ))}
      <Modals templateIdx={templateIdx} type="tomatoAdd"></Modals>
    </div>
  )
}

export default TomatoList
