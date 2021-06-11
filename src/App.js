import React from "react";
import { Twitter } from "react-bootstrap-icons";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import noodles from "./noodles.JPG";
import noodlesgif from "./noodles.gif";
import tgicon from "./tg.png";

function App() {
  var openInNewTab = (url) => {
    var newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

  return (
    <div className="app">
      <Navbar expand="lg" className="custom-nav" sticky="top">
        <div class="d-flex justify-content-center">
          <div className="icon-container">
            <img
              className="icon"
              src="https://uploads-ssl.webflow.com/60a9140e4874de04164387e8/60a95c6f4693009ed5838675_pancakeswap.png"
            />
          </div>
          <div className="icon-container">
            <img
              className="icon"
              src="https://uploads-ssl.webflow.com/60a9140e4874de04164387e8/60a95c5852279b878aa9a098_tele.png"
              onClick={() => openInNewTab('https://t.me/CupNoodlesCoin114514')}
            />
          </div>

          <div className="icon-container twitter">
            <Twitter onClick={() => openInNewTab('https://twitter.com')}/>
          </div>
        </div>
      </Navbar>


        <div className="d-flex justify-content-center">
          <img className="noodles" src={noodles} />
        </div>
        <div className="d-flex justify-content-center coin-title">
          $CNC 泡面币
        </div>
      <div className="content">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-sm-6 col-xs-6 col-md-6">
              <div className="divider" />
              <div className="content-title">
                <div>泡面币</div>
                <div>的初衷和目的</div>
              </div>
              在文字录入比赛（打字比赛）中，最公平的比赛用文本就是随机文本，这个随机汉字生成器便是为此所作。普通人的汉字录入速度一般是每分钟几十个到一百多个，我们可以生成一两千字的随机汉字文本，让比赛者录入完这些汉字，依据他们的比赛用时和正确率判断名次。生成随机汉字的原始文字一般选择常用汉字，经过随机排列之后只能一个字一个字的输入，对参赛者来说是相对公平的方案。
              <div className="button-container">
                <Button variant="primary" size="lg">
                  查看K线图
                </Button>
                <Button variant="primary" size="lg">
                  白皮书
                </Button>
              </div>
            </div>
            <div className="col-sm-6 col-xs-6 col-md-6">
              <img className="noodlesgif" src={noodlesgif} />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-sm-6 col-xs-6 col-md-6">
            <div className="content">
              <div className="divider" />
              <div className="content-title">
                <div>泡面币</div>
                <div>的代币详情与分发比</div>
              </div>
              区块链: BSC 币安链
              <br />
              合约地址: 0x8c5595F8C61321273fa8151ce74FFCBeE3390814
              <br />
              总量: 100,000,000,000
              <br />
              总量: 100,000,000,000
              <br />
              总量: 100,000,000,000
              <br />
              总量: 100,000,000,000
            </div>
          </div>
          <div className="col-sm-6 col-xs-6 col-md-6">
          <div className="content">
            <div className="divider" />
            <div className="content-title">
              <div>泡面币</div>
              <div>的活动社区</div>
            </div>
            电报Telegram中文社区: <a href="https://t.me/CupNoodlesCoin114514" target="_blank" > https://t.me/CupNoodlesCoin114514 </a>
            <br />
            电报Telegram英文社区:  <a href="https://t.me/CupNoodlesCoin114514" target="_blank" > https://t.me/CupNoodlesCoin114514 </a>
            <br />
            推特Twitter:  <a href="https://twitter.com" target="_blank" > https://twitter.com </a>
            <br />
            Reddit: <a href="https://reddit.com" target="_blank" > https://reddit.com </a>
          </div>
          </div>
        </div>
      </div>

      <div className="content">
        <div className="divider" />
        <div className="content-title">
          <div>泡面币</div>
          <div>的项目进程</div>
        </div>
        <b>2021年06月:</b> 随机文本随机文本随机文本随机文本随机文本
        <br />
        <b>2021年06月:</b> 随机文本随机文本随机文本
        <br />
        <b>2021年06月:</b> 随机文本随机文本随机文本随机文随机文
        <br />
        <b>2021年06月:</b> 随机文本随机文本随机文本随机文本
        <br />
        <b>2021年06月:</b> 随机文本随机文本
        <br />
        <b>2021年06月:</b> 随机文本随机文本随机文本随机文本
      </div>

      <div className="container-fluid p-0">
        <div className="content">
          <div className="divider" />
          <div className="content-title">
            <div>泡面币</div>
            <div>的购买步骤</div>
          </div>
          <div className="row">
            <div className="col-sm-4 col-xs-4 col-md-4">
              <div className="buy-step step-1">
                <div className="step-button"> &nbsp; &nbsp; 第一步 </div>
                <div className="step-title"> 拥有币安钱包 </div>
                <p className="step-content"> 无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本” </p>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 col-md-4">
            <div className="buy-step step-2">
              <div className="step-button"> &nbsp; &nbsp; 第二步 </div>
              <div className="step-title"> 在薄饼上添加泡面币 </div>
              <p className="step-content"> 无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本” </p>

            </div>
            </div>
            <div className="col-sm-4 col-xs-4 col-md-4">
            <div className="buy-step step-3">
              <div className="step-button"> &nbsp; &nbsp; 第三步 </div>
              <div className="step-title"> 用USDT兑换泡面币 </div>
              <p className="step-content"> 无可否认，当读者在浏览一个页面的排版时，难免会被可阅读的内容所分散注意力。Lorem Ipsum的目的就是为了保持字母多多少少标准及平均的分配，而不是“此处有文本，此处有文本” </p>

            </div>
            </div>
            </div>

        </div>
      </div>
      <div className="content end-content">
        Copyright © Cup Noodles Coin
      </div>
      <div className='tg-icon-container' onClick={() => openInNewTab('https://t.me/CupNoodlesCoin114514')}>
        <img className="tgicon" src={tgicon} />
      </div>
    </div>
  );
}

export default App;
