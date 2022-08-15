import {Link} from "react-router-dom";
import React from "react";
import {Parameters} from "../parameters";


export const Introduction = ({params}: {params: Parameters}) => {
    return <div className="content">
        <h1 className="title is-3">Bounty Hunting is for Everyone</h1>
        <p>
            QUEST is a <s>fundraising</s> bounty hunt platform. <br />
            By bridging a friendly user interface with blockchain, QUEST enables a secure environment for people worldwide to help each other achieve their <s>goals</s> Quests!
        </p>
        <div className="block my-6">
            <figure className="image osi-quest-figure">
                <img src="/quest_mechanism.svg" alt="QUEST mechanism" />
            </figure>
        </div>
        { !params.isSignedIn ? <>
            <div className="buttons is-centered are-large mt-6 mb-0">
                <Link to="/signup" className="button is-primary">Sign Up Now !</Link>
            </div>
            <div className="buttons is-centered mb-6">
                <Link to="/dashboard" className="button is-text">or Sign In</Link>
            </div>
        </> : null }
            <h3 className="title is-5">How QUEST Works:</h3>
            <p>
            Anyone with a fundraising goal can use QUEST to demonstrate their abilities and attract <s>supporters</s>, accomplices.<br />
            QUEST is perfect for anyone that has already completed a project or goal, or is organizing a new one. We call these missions “Quests”
            </p>
            <blockquote>
                <p>
                Projects, goals, missions are detailed in the “Quest” the Bounty Hunter has created. Potential accomplices review the information provided in the Quest and decide whether the Quest is worth supporting, or not.
                </p>
                </blockquote>
            <p>
            Once you have identified your goal and have a plan to achieve it, it’s time to rally the community to support you! With a war chest of $XYM, and the strength of the community behind you, you will overcome all struggles, achieving your mission and accomplishing the Quest! 
            </p>
            <blockquote>
            <p>
            Some Quest ideas: Build a dApp, write a blog post, translate material, organize a hackathon, contribute on github: https://github.com/symbol
            </p>
            </blockquote>
        <hr />
            <h3 className="title is-5">How am I protected?</h3>
            <p>
            If accomplices are not satisfied with the progress and commitment of the Venturer, or the Venturer has otherwise failed to complete the Quest, the bounty is returned to the would-be accomplices.
            
            <blockquote>This protection makes QUEST unique! With Symbol as the core engine, QUEST enables people to support each other with minimal fees, and without needing to trust a 3rd party custodian.
             QUEST core features and processes are on-chain and automated, creating a secure and convenient user experience.
            </blockquote>
</p><p>
What are you waiting for? Sharpen your hooks, pen your plot, and compel your mates to lend an ear and perhaps some coin, too!
                </p>
                <hr />
            <h3 className="title is-5">Definitions:</h3>
            <p>
            <b>Flatlander:</b>
            <blockquote>
            One who has not yet formed a Quest. Neither have they been an accomplice on a Quest arranged by another.
            </blockquote>
Upon birth, it typically takes some time before a citizen develops the leg strength to do much adventuring. They first need to overcome the challenges posed by flat surfaces and mild chores, such as harvesting.
</p>
<p>
<b>Venturer:</b>
<blockquote>
    The bounty hunter that organizes a Quest.
</blockquote>
The days of a peaceable and boring life on the flatland are over. Venturers create Quests and connive fellow citizens to support them.
Venturers often create light Quests, such as writing a bloody blog post or seducing a merchant to accept $XYM, but the most battle-scarred Venturers sail the stellar winds to flatten mountains, destroy the vile enemy, and fill their decks with loot.
These elite Venturers reduce invading bugs to ashes and code new life with the embers of fire. The gravestones of their adversaries now a galactic cornerstone in what's become the renown XYMCity.
</p>
<p>
<b>Accomplice:</b>
<blockquote>
    One that conspires to support the Quest of another.
</blockquote>
As any learned citizen will have you know, there is no better meal for a Starsnake than a lone Venturer. Without accomplices, plunder becomes blunder. Quests fail, and ‘tis a tizzy of a death. 
So, prepare your propaganda wisely and learn to recognize a good trick. Execute your Quests faithful, lest your plot twists.
            </p>
            <div className="columns my-6">
            <div className="column is-three-fifths is-offset-one-fifth">
                <p>...now to learn a litte more about Symbol.</p>
            </div>
    </div>
        <div className="my-6">
            <h3 className="title is-5">QUEST uses Symbol block chain</h3>
            <div className="columns">
                <div className="column">
                    <blockquote>
                        <p>
Symbol is a layer one blockchain serving the settlement layer for the new economy.<br /><br />
The future of Symbol envisions it as the hub and interchange layer at the center of a universe of bespoke chains without global scalability constraints.
                        </p>
                        <p className="has-text-right">
                            <i><a href="https://docs.symbol.dev/">Official Symbol Documentaion</a></i>
                        </p>
                    </blockquote>
                    <p>
                    Symbol’s native currency, $XYM is used for all transitions on QUEST.

By using Symbol as the core engine, we are able to rapidly develop and minimize cost to users, while still maintaining the security expected of a reputable blockchain.

                    </p>
                </div>
                <div className="column is-4 p-6">
                    <a href="https://symbolplatform.com/" target="_blank" rel="noreferrer">
                        <img src="/Symbol_Logo-wordmark-stacked-dark-BG.svg" alt="Symbol" />
                    </a>
                </div>
            </div>
        </div>

        <div className="columns my-6">
            <div className="column is-three-fifths is-offset-one-fifth">
                <h3 className="title is-5">Where can I get XYM?</h3>
                { params.networkType === '152' ? <div className="notification">
                    This is a TEST SITE connected to the Testnet.
                    You can grab XYM for Testnet from the <a href="https://testnet.symbol.tools/" target="_blank" rel="noreferrer">Faucet</a>.
                </div> : <p>
                    XYM is available on many exchanges such as <a href="https://bittrex.com/Market/Index?MarketName=BTC-XYM" target="_blank" rel="noreferrer">Bittrex</a>
                    , <a href="https://www.kucoin.com/trade/XYM-USDT" target="_blank" rel="noreferrer">Kucoin</a>
                    , <a href="https://gate.io/trade/xym_usdt">Gate</a>, and many more as shown on <a href="https://coinmarketcap.com/currencies/symbol/markets/" target="_blank" rel="noreferrer">Coinmarketcap</a>.
                </p> }
            </div>
        </div>
    </div>;
}
