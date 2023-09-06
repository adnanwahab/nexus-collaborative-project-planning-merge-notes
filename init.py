model = "meta-llama/Llama-2-7b-chat-hf"


from transformers import AutoTokenizer
import transformers
import torch
tokenizer = AutoTokenizer.from_pretrained(model, token='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')
pipeline = transformers.pipeline(
    "text-generation",
    model=model,
    torch_dtype=torch.float16,
    device_map="auto",
)
