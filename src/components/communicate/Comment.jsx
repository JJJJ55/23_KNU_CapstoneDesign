import React from 'react';
import styled, { css } from 'styled-components';
import Button from '../../components/common/Button';
import { useState } from 'react';
import TestFile from './testFile';
import img from '../../assets/img/sp_img.png';

const S = {
  Content: styled.div`
    width: 370px;
    height: auto;
    margin: 0 auto;
    display: block;
  `,
  Box: styled.div`
    width: 370px;
    height: auto;
    border: 1px solid #dadada;
    border-radius: 10px;
  `,
  List: styled.ul`
    width: 370px;
    height: auto;
    list-style: none;
  `,
  Message: styled.div`
    width: 370px;
    height: auto;
  `,
  MessageBox: styled.li`
    width: 370px;
    height: 30px;
    display: flex;
    cursor: pointer;
  `,
  Reply: styled.div`
    width: 330px;
    height: auto;
    margin-left: 20px;
    background-color: #fafafa;
  `,
  ReplyBox: styled.li`
    width: 330px;
    height: 30px;
    display: flex;
    border: 1px solid #ddd;
    cursor: default;
  `,
  CommentLine: styled.div`
    width: 350px;
    border-top: 1px solid #dadada;
    margin: 0 auto;
  `,
  Cuser: styled.div`
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
  `,
  Ctext: styled.div`
    width: 310px;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 12px;
  `,
  Replyuser: styled.div`
    width: 60px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    font-weight: bold;
  `,
  Replytext: styled.div`
    width: 310px;
    height: 30px;
    display: flex;
    align-items: center;
    padding: 5px;
    font-size: 12px;
    &::before {
      content: ' ';
      position: relative;
      left: -3px;
      top: -2px;
      display: block;
      width: 8px;
      height: 8px;
      background: url(${img}) no-repeat;
      background-position: -283px -200px;
    }
  `,
  InputBox: styled.div`
    width: 370px;
    height: 45px;
    display: flex;
    position: relative;
    justify-content: space-between;
    margin-bottom: 10px;
    align-items: center;
    &.add {
      display: block;
    }
  `,
  ReplyInputBox: styled.div`
    width: 330px;
    height: 45px;
    margin: 0 auto;
    background-color: #fafafa;
    display: flex;
    position: relative;
    justify-content: space-between;
    border: 1px solid #ddd;
    align-items: center;
    &.add {
      display: block;
    }
  `,
  CommentInput: styled.input`
    width: 280px;
    height: 30px;
    border: solid 1px #dadada;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 10px;
  `,
  ReplyInput: styled.input`
    width: 260px;
    height: 30px;
    border: solid 1px #dadada;
    border-radius: 10px;
    font-size: 12px;
    padding-left: 10px;
  `,
  CommentButton: styled.button`
    width: 70px;
    height: 30px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    background-color: #e2e2e2;
    cursor: pointer;
    ${(props) =>
      props.active === false &&
      css`
        background-color: #f7f7f7;
        color: #000;
        :hover {
        }
        pointer-events: none;
      `}
  `,
  ReplyButton: styled.button`
    width: 60px;
    height: 30px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    background-color: #e2e2e2;
    cursor: pointer;
    ${(props) =>
      props.active === false &&
      css`
        background-color: #f7f7f7;
        color: #000;
        :hover {
        }
        pointer-events: none;
      `}
  `,
};

const Comment = () => {
  const [data, setData] = useState({
    comment: '',
    user: localStorage.getItem('username'),
  });
  const [push, setPush] = useState([]);
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleVisibility = (index) => {
    if (index === visibleIndex) {
      // 이미 보이는 div를 클릭하면 숨김
      setVisibleIndex(null);
    } else {
      // 다른 div를 클릭하면 해당 div를 보임
      setVisibleIndex(index);
    }
  };

  const InputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const PushComment = () => {
    console.log('댓글 등록', data.comment, data.user);
  };
  // const divs = [
  //   { title: '오진영', message: '댓글1' },
  //   { title: '오승민', message: '댓글2' },
  //   { title: '이삭', message: '댓글3' },
  // ];
  // const divss = [
  //   { title: '오진영', message: '대댓글1', index: 0 },
  //   { title: '오승민', message: '대댓글2', index: 0 },
  //   { title: '이삭', message: '대댓글3', index: 2 },
  // ];
  // return (
  //   <S.Content>
  //     <S.Box>
  //       <S.List>
  //         {divs.map((content, index) => (
  //           <S.Message key={index}>
  //             <S.MessageBox onClick={() => toggleVisibility(index)}>
  //               <S.Cuser>{content.title}</S.Cuser>
  //               <S.Ctext>{content.message}</S.Ctext>
  //             </S.MessageBox>
  //             <S.CommentLine />
  //             {index === visibleIndex ? (
  //               <S.ReplyInputBox>
  //                 <S.ReplyInput
  //                   name="comment"
  //                   value={data.comment}
  //                   onChange={InputChange}
  //                   placeholder="댓글을 입력하세요."
  //                 />
  //                 <S.ReplyButton onClick={PushComment}>입 력</S.ReplyButton>
  //               </S.ReplyInputBox>
  //             ) : null}
  //             {divss.map((content, index) => (
  //               <S.Reply>
  //                 <S.ReplyBox key={index}>
  //                   <S.Replyuser>{content.title}</S.Replyuser>
  //                   <S.Replytext>{content.message}</S.Replytext>
  //                 </S.ReplyBox>
  //               </S.Reply>
  //             ))}
  //           </S.Message>
  //         ))}

  //         {/* <S.Reply>
  //           <S.ReplyBox>
  //             <S.Replyuser>오진영</S.Replyuser>
  //             <S.Replytext>대댓글입니다.</S.Replytext>
  //           </S.ReplyBox>
  //         </S.Reply> */}
  //       </S.List>
  //     </S.Box>
  //     <S.InputBox>
  //       <S.CommentInput
  //         name="comment"
  //         value={data.comment}
  //         onChange={InputChange}
  //         placeholder="댓글을 입력하세요."
  //       />
  //       <S.CommentButton onClick={PushComment}>입 력</S.CommentButton>
  //     </S.InputBox>
  //   </S.Content>
  // );
  const divs = [
    { title: '오진영', message: '댓글1' },
    { title: '오승민', message: '댓글2' },
    { title: '이삭', message: '댓글3' },
  ];

  const divss = [
    { title: '오진영', message: '대댓글1', commentIndex: 0 },
    { title: '오승민', message: '대댓글2', commentIndex: 1 },
    { title: '이삭', message: '대댓글3', commentIndex: 2 },
    { title: '이삭', message: '대댓글4', commentIndex: 2 },
    { title: '이삭', message: '대댓글5', commentIndex: 0 },
  ];

  return (
    <S.Content>
      <S.Box>
        <S.List>
          {divs.map((content, index) => (
            <S.Message key={index}>
              <S.MessageBox onClick={() => toggleVisibility(index)}>
                <S.Cuser>{content.title}</S.Cuser>
                <S.Ctext>{content.message}</S.Ctext>
              </S.MessageBox>
              <S.CommentLine />
              {index === visibleIndex ? (
                <S.ReplyInputBox>
                  <S.ReplyInput
                    name="comment"
                    value={data.comment}
                    onChange={InputChange}
                    placeholder="댓글을 입력하세요."
                  />
                  <S.ReplyButton onClick={PushComment}>입 력</S.ReplyButton>
                </S.ReplyInputBox>
              ) : null}
              {divss
                .filter((reply) => reply.commentIndex === index)
                .map((reply, replyIndex) => (
                  <S.Reply key={replyIndex}>
                    <S.ReplyBox>
                      <S.Replyuser>{reply.title}</S.Replyuser>
                      <S.Replytext>{reply.message}</S.Replytext>
                    </S.ReplyBox>
                  </S.Reply>
                ))}
            </S.Message>
          ))}
        </S.List>
      </S.Box>
      <S.InputBox>
        <S.CommentInput
          name="comment"
          value={data.comment}
          onChange={InputChange}
          placeholder="댓글을 입력하세요."
        />
        <S.CommentButton onClick={PushComment}>입 력</S.CommentButton>
      </S.InputBox>
    </S.Content>
  );
};

export default Comment;
