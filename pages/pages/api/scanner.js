export default function handler(req, res) {
  const { candles } = req.body; // array of candle data
  const breakout = candles.slice(-3);
  const confirmation = breakout[2].type === 'engulfing';

  if (confirmation) {
    res.status(200).json({
      signal: 'Buy',
      reason: 'Third candle breakout confirmed',
      risk: '1–2%',
      rr: '2:1'
    });
  } else {
    res.status(200).json({ signal: 'Wait', reason: 'No confirmation yet' });
  }
}
