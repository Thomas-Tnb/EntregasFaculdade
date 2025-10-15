(ns entrega1.main)

(defn -main []
  (println "Quantos alunos há na turma?")
  (def qtdAlunos (Integer/parseInt (read-line)))
  (println "São" qtdAlunos "alunos na turma.")

  (loop [i 1 soma 0 aprovados 0]
    (if (> i qtdAlunos)
      (do
        (let [media (/ soma qtdAlunos)]
          (println "Média:" media "Aprovados:" aprovados)
          ;; Mensagem de desempenho geral
          (if (>= media 80)
            (println "Turma excelente!")
            (if (>= media 60)
              (println "Bom desempenho!")
              (println "É necessário melhorar!")))))
      (do
        (println "Nome do aluno" i ":")
        (let [nomeAluno (read-line)]
          (println "Nota do aluno" i ":")
          (let [notaAluno (Integer/parseInt (read-line))
                conceito (cond
                           (>= notaAluno 90) "A"
                           (>= notaAluno 80) "B"
                           (>= notaAluno 70) "C"
                           (>= notaAluno 60) "D"
                           :else "F")
                nova-soma (+ soma notaAluno)
                novo-aprovados (if (>= notaAluno 60)
                                 (inc aprovados)
                                 aprovados)]
            (println "Nome:" nomeAluno "Nota:" notaAluno "Conceito:" conceito)
            (recur (inc i) nova-soma novo-aprovados)))))))
