package org.example;

import com.google.cloud.vertexai.VertexAI;
import com.google.cloud.vertexai.api.Content;
import com.google.cloud.vertexai.api.GenerateContentResponse;
import com.google.cloud.vertexai.api.GenerationConfig;
import com.google.cloud.vertexai.api.HarmCategory;
import com.google.cloud.vertexai.api.SafetySetting;
import com.google.cloud.vertexai.generativeai.ContentMaker;
import com.google.cloud.vertexai.generativeai.GenerativeModel;
import com.google.cloud.vertexai.generativeai.PartMaker;
import com.google.cloud.vertexai.generativeai.ResponseStream;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Main {
    private static final Logger logger = LoggerFactory.getLogger(Main.class);

    public static void main(String[] args) throws IOException {
//        logger.info("Iniciando a aplicação");
//        try (VertexAI vertexAi = new VertexAI("tactile-cinema-451118-g2", "southamerica-east1"); ) {
//            GenerationConfig generationConfig =
//                    GenerationConfig.newBuilder()
//                            .setMaxOutputTokens(8192)
//                            .setTemperature(1F)
//                            .setTopP(0.95F)
//                            .build();
//            List<SafetySetting> safetySettings = Arrays.asList(
//                    SafetySetting.newBuilder()
//                            .setCategory(HarmCategory.HARM_CATEGORY_HATE_SPEECH)
//                            .build(),
//                    SafetySetting.newBuilder()
//                            .setCategory(HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT)
//                            .build(),
//                    SafetySetting.newBuilder()
//                            .setCategory(HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT)
//                            .build(),
//                    SafetySetting.newBuilder()
//                            .setCategory(HarmCategory.HARM_CATEGORY_HARASSMENT)
//                            .build()
//            );
//            GenerativeModel model =
//                    new GenerativeModel.Builder()
//                        .setModelName("gemini-1.5-flash-002")
//                            .setVertexAi(vertexAi)
//                            .setGenerationConfig(generationConfig)
//                            .setSafetySettings(safetySettings)
//                            .build();
//
//            Content content = Content.newBuilder()
//                    .addParts(PartMaker.fromMimeTypeAndData("text/plain", "Escreva um poema curto sobre a cidade de sao paulo."))
//                    .build();
//
//            ResponseStream<GenerateContentResponse> responseStream = model.generateContentStream(content);
//
//            responseStream.stream().forEach(System.out::println);
//        }
//        logger.info("Finalizando a aplicação");
    }
}