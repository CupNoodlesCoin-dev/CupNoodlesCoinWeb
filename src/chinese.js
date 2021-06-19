import React from "react";
import { Twitter, Translate } from "react-bootstrap-icons";
import "./App.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import noodles from "./noodles.JPG";
import noodlesgif from "./noodles.gif";
import tgicon from "./tg.png";
import whitePaper from "./whitepaper.pdf";

function App() {
  var openInNewTab = (url) => {
    var newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  var openInSameTab = (url) => {
    var newWindow = window.open(url, "_self", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className="app">
      <Navbar expand="lg" className="custom-nav" sticky="top">
        <div class="d-flex justify-content-center">
          <div className="icon-container">
            <img
              className="icon"
              src="https://uploads-ssl.webflow.com/60a9140e4874de04164387e8/60a95c6f4693009ed5838675_pancakeswap.png"
              onClick={() =>
                openInNewTab(
                  "https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x55d398326f99059ff775485246999027b3197955&outputCurrency=0x50feDA21961B8097f18Ba884f03842377980761f"
                )
              }
            />
          </div>
          <div className="icon-container">
            <img
              className="icon"
              src="https://uploads-ssl.webflow.com/60a9140e4874de04164387e8/60a95c5852279b878aa9a098_tele.png"
              onClick={() => openInNewTab("https://t.me/CupNoodlesCoin_China")}
            />
          </div>

          <div className="icon-container twitter">
            <Twitter
              onClick={() => openInNewTab("https://twitter.com/CupNoodlesCoin")}
            />
          </div>

          <div className="icon-container twitter">
            <Translate
              onClick={() => openInSameTab("https://www.cupnoodlescoin.org/en")}
            />
          </div>
        </div>
      </Navbar>

      <div className="d-flex justify-content-center">
        <img className="noodles" src={noodles} />
      </div>
      <div className="d-flex justify-content-center coin-title">
        CNC（Cup Noodles Coin）泡面币
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
              泡面币的项目团队成员均来自于一个土狗币G**的骗局，大家作为管理员辛苦打工了10天却一无所获，最后还被G**发行方撤了池子，背了大锅。怀揣着仅剩的一点钱和梦想，被鸽（割）的管理员们聚在一起，一同发行了Cup
              Noodles Coin, 泡面币。
              <div className="button-container">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() =>
                    openInNewTab(
                      "https://dex.guru/token/0x50feDA21961B8097f18Ba884f03842377980761f-bsc"
                    )
                  }
                >
                  查看K线图
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => openInSameTab(whitePaper)}
                >
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
                <div>的代币详情</div>
              </div>
              <em>区块链:</em> BSC 币安链
              <br />
              <em>主网络:</em> BEP20
              <br />
              <em>合约地址:</em> 0x50feDA21961B8097f18Ba884f03842377980761f
              <br />
              <em>机制:</em> 每笔交易2%分红，3%添加流动池，支持CNC兑泡面服务。
              <br />
              <em>代币发行总量:</em> 10,000,000,000（100亿)
              <br />
              <em>流动性提供（<b>锁3年</b>）:</em> 40亿
              <br />
              <em>CNC挖矿（进行中）:</em> 30亿
              <br />
              <em>社区激励（空投进行中）:</em> 20亿
              <br />
              <em>技术研发和运营: </em>10亿
            </div>
          </div>
          <div className="col-sm-6 col-xs-6 col-md-6">
            <div className="content">
              <div className="divider" />
              <div className="content-title">
                <div>泡面币</div>
                <div>的常见问题</div>
              </div>
              <div>
                <i>1. 怎么知道泡面币锁没锁池子? </i>{" "}
                &nbsp;&nbsp;&nbsp;&nbsp;项目方把40亿的泡面币上线当天利用DxSale平台将池子锁三年(至2022年6月18号).{" "}
                <b
                  onClick={() =>
                    openInNewTab(
                      "https://dxsale.app/app/pages/dxlockview?id=0&add=0xe0750d445743f9ef39ae9b3f3bac5f9c8bf808bc&type=lplock&chain=BSC"
                    )
                  }
                >
                  点击查看已锁的池子
                </b>{" "}
                (由于DxSale的网站不是很稳定,
                可能需要反复刷新几次才能看到CNC/USDT的LP. 若无法访问,{" "}
                <b onClick={() => openInNewTab("https://postimg.cc/SjpbjLBy")}>
                  点击查看截图
                </b>
                )
                <br />
                <br />
                <div>
                  <i>2. 买入泡面币的滑点是多少? </i> &nbsp;&nbsp;&nbsp;&nbsp;
                  买入泡面币最低的手续费是5.09%.
                  请在PancakeSwap购买的时候设置好高于5.09的滑点.
                  <br />
                </div>
              </div>
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
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-sm-4 col-xs-4 col-md-4">
              <em>2021年06月:</em>
              <br />
              &nbsp; &nbsp; CNC上线Pancake ✅
              <br />
              &nbsp; &nbsp; 网站上线 ✅
              <br />
              &nbsp; &nbsp; 发布白皮书 ✅
              <br />
              &nbsp; &nbsp; Pancake流动性锁仓 ✅
              <br />
              &nbsp; &nbsp; 平台联合空投 🔄
              <br />
              &nbsp; &nbsp; 持币快照空投 🔄
              <br />
              &nbsp; &nbsp; 地址数上2000 🔄
            </div>
            <div className="col-sm-4 col-xs-4 col-md-4">
              <em>2021年07月:</em>
              <br />
              &nbsp; &nbsp; 启动质押池，进行单币或双币挖矿
              <br />
              &nbsp; &nbsp; 落地泡面兑换业务
              <br />
              &nbsp; &nbsp; 地址数上5000
            </div>
            <div className="col-sm-4 col-xs-4 col-md-4">
              <em>2021年8月:</em>
              <br />
              &nbsp; &nbsp; 上线中流交易所（抹茶，Gate等）
              <br />
              &nbsp; &nbsp; 上线泡面NFT商城
              <br />
              &nbsp; &nbsp; 地址数上10000
            </div>
          </div>
        </div>
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
                <div className="step-title"> 拥有BSC钱包 </div>
                <p className="step-content">
                  {" "}
                  如果您还没有BSC钱包，我们推荐您使用TP(TokenPocket)来创建自己的BSC钱包。
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 col-md-4">
              <div className="buy-step step-2">
                <div className="step-button"> &nbsp; &nbsp; 第二步 </div>
                <div className="step-title"> 在薄饼上添加泡面币 </div>
                <p className="step-content">
                  {" "}
                  请点击屏幕上方的薄饼图标，然后在薄饼中确实添加泡面币并且链接您的BSC钱包。如果成功连接并添加，您将看到泡面币CNC出现在Swap的选项里。
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-xs-4 col-md-4">
              <div className="buy-step step-3">
                <div className="step-button"> &nbsp; &nbsp; 第三步 </div>
                <div className="step-title"> 用USDT兑换泡面币 </div>
                <p className="step-content">
                  {" "}
                  购买泡面币，您需要在BSC钱包里有足够的USDT。当有USDT余额时，请确认在Swap里的是USDT/CNC并输入USDT的金额进行购买。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-0">
        <div className="content">
          <div className="divider" />
          <div className="content-title">
            <div>泡面币</div>
            <div>的官方活动社区</div>
          </div>
          <em>官方中文电报群:</em>{" "}
          <a href="https://t.me/CupNoodlesCoin_China" target="_blank">
            {" "}
            https://t.me/CupNoodlesCoin_China{" "}
          </a>
          <br />
          <em>官方英文电报群:</em>{" "}
          <a href="https://t.me/CupNoodlesCoin_English" target="_blank">
            {" "}
            https://t.me/CupNoodlesCoin_English{" "}
          </a>
          <br />
          <em>官方推特号:</em>{" "}
          <a href="https://twitter.com/CupNoodlesCoin" target="_blank">
            {" "}
            https://twitter.com/CupNoodlesCoin{" "}
          </a>
          <br />
        </div>
      </div>
      <div className="content end-content">
        Copyright © Cup Noodles Coin Teams
      </div>
      <div
        className="tg-icon-container"
        onClick={() => openInNewTab("https://t.me/CupNoodlesCoin_China")}
      >
        <img className="tgicon" src={tgicon} />
      </div>
    </div>
  );
}

export default App;
