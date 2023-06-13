class Node {
    constructor() {
        this.child = new Array(26) ;
        this.pref = 0;
        this.end = 0;
        this.links = [] ;
    }

    exist = (ch) => {
        ch = ch.toLowerCase();
        const num = ch.charCodeAt(0) - 97  ;
        return this.child[ num ] != undefined ;
    }

    push = (ch) => {
        ch = ch.toLowerCase();
        const num = ch.charCodeAt(0) - 97 ;
        this.child[ num ] = new Node() ;
    }

    get = (ch) => {
        ch = ch.toLowerCase();
        const num = ch.charCodeAt(0) - 97 ;
        return this.child[num] ;
    }
}

class Trie {
    root = new Node() ;

    insertWord = (str , link) => {
        let node = this.root;
        for (let i=0; i<str.length; i++){
            const ch = str[i].toLowerCase() ;
            if (node.exist(ch) ){
                node = node.get(ch) ;
            }
            else {
                node.push(ch) ;
                node = node.get(ch) ;
                node.pref++;
            }
        }
        node.end++;
        node.links.push(link);
    }

    getWordsUtil = (node , ans , arr) => {
        if (node.end>0){
            ans.push({str: arr.join("") , links : node.links}) ;
        }
        
        for (let i=97; i<=122; i++){
            const ch = String.fromCharCode(i) ;
            if (node.exist(ch)){
                arr.push(ch) ;
                this.getWordsUtil(node.get(ch) , ans , arr) ;
                arr.pop() ;
            }
        }
    }

    getWords = (str) => {
        if (str.length == 0)
            return [] ;
        const ans = [] ;
        const arr = [] ;
        let node = this.root;

        for (let i=0; i<str.length; i++){
            const ch = str[i].toLowerCase() ;
            if (node.exist(ch)){
                node = node.get(ch) ;
                arr.push(ch) ;
            }
            else {
                return ans;
            }
        }
        
        this.getWordsUtil(node,ans,arr) ;
        return ans;
    }
}

export default Trie;