export default async function handler(req, res) {
  try {
    const { userText } = req.body;

    const apiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: userText }]
      })
    });

    const data = await apiRes.json();
    const output = data.choices?.[0]?.message?.content || "No response";

    res.status(200).json({ reply: output });

  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
