# quiz-master

### Features
- Chalk
- Conf

### Quick Start

Install package modules
        
    npm install

    npm install -g .
    

Running CLI
```  
 quiz_master
```

```  
 quiz_master help
```

```  
 quiz_master create_question <no> <question> <answer>
```

```  
 quiz_master update_question <no> <question> <answer>
```

```  
 quiz_master questions
```

```  
 quiz_master question <no>
```

```  
 quiz_master delete_question <no>
```

```  
 quiz_master delete_questions
```

```  
 quiz_master answer_question <no> <answer>
```

Example
        
    quiz_master create_question 2 "How many vowels are there in the English alphabet?" 5 

    quiz_master update_question 2 "How many vowels are there in the English alphabet?" 22

    quiz_master questions

    quiz_master question 1

    quiz_master delete_question 1

    quiz_master delete_questions

    quiz_master answer_question 1 22

## License

[MIT](LICENSE)