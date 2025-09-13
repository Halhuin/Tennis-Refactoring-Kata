'use strict';

function getScore(m_score1, m_score2) {
    let score = ''

    if (m_score1 === m_score2) {
        score = tryConvertToTennisScoreEquality(m_score1)
        return score
    }

    if (m_score1 >= 4 || m_score2 >= 4) {
        if (m_score1 === m_score2 + 1) {score = "Advantage player1";}
        else if (m_score1 === m_score2 - 1) {score = "Advantage player2";}
        else if (m_score1 >= m_score2 + 2) {score = "Win for player1";}
        else {score = "Win for player2";}
        return score
    }

    score += tryConvertToTennisScore(m_score1) + '-' + tryConvertToTennisScore(m_score2);
    return score;
}

function tryConvertToTennisScoreEquality(m_score){
    if (m_score >= 3) {
        return 'Deuce'
    }

    return tryConvertToTennisScore(m_score) + '-' + 'All'
}

function tryConvertToTennisScore(m_score){
    switch (m_score) {
        case 0:
            return "Love";
        case 1:
            return "Fifteen";
        case 2:
            return "Thirty";
        case 3:
            return "Forty";
        default:
            return "";
    }
}

module.exports = getScore;
