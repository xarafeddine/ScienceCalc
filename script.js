
alert("welcom to ask science");

//equation solver :
function geto () {
    var a,b,c,delta,x,y;
    
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    c=document.getElementById("c").value;
    
    delta=(b*b)-(4*a*c);
    d=Math.sqrt(delta);
    if(a==0){
        if(b==0){
            if(c==0)
                document.getElementById("demo").innerHTML="every number is a solution to this equation";
            else 
                document.getElementById("demo").innerHTML="this equation has no solution";
        }
        else 
            document.getElementById("demo").innerHTML="this equation has one solution that is : " +"<br>"+ -c/b ;
            
    }
        
    else{
        if(delta>=0){
            x=(-b-d)/2*a;
            y=(-b+d)/2*a
            if(x==y){
                document.getElementById("demo").innerHTML="this equation has one solution that is : "+"<br>"+ x ;
            }
            else{
                document.getElementById("demo").innerHTML="this equation has two solutions :" +"<br>"+ " x= " + x +" or x= " + y ;
                
            }
            
        
        }
        else{
            delta=Math.abs((b*b)-(4*a*c));
            d=Math.sqrt(delta);
            document.getElementById("demo").innerHTML="this equation has two solutions :"+"<br>" + "x= " + (-b/2*a)+"+i*("+(-d/2*a)+")" +" or x= " + (-b/2*a)+"+i*("+(d/2*a)+")" ;
        }
    }


}
//number systems converter


function convert() {
    var num_1= document.getElementById("num_1").value;
    
    var select_1 = document.getElementById("select_1");
    var base_1 =select_1.options[select_1.selectedIndex].value;
    var select_2 = document.getElementById("select_2");
    var base_2 =select_2.options[select_2.selectedIndex].value;
    
    var rslt=parseInt(num_1, base_1).toString(base_2);

    document.getElementById("num_2").value=rslt;



    

    
}


function num2dcm (base){

}




// decimal to bainary

function DtoB (dcm){
    var i,tab=[];
    var txt='';
    
    
    
    if (dcm>0){
        i=0;
        while(dcm>0){
            tab[i]= dcm % 2 ;
            dcm=Math.floor(dcm/2);
            i++;
            
        }
        for(j=i-1;j>=0;j--){
            txt = txt + tab[j];
            document.getElementById("bnr").innerHTML = txt;

        }
    }
    
    else {
        document.getElementById("bnr").innerHTML = 0;
    }

}


//decimal to actal
function DtoO (){
    var dcm,i,tab=[];
    var txt='';
    
    dcm=document.getElementById("dcm2").value;
    
    if (dcm>0){
        i=0;
        while(dcm>0){
            tab[i]= dcm % 8 ;
            dcm=Math.floor(dcm/8);
            i++;
            
        }
        for(j=i-1;j>=0;j--){
            txt = txt + tab[j];
            document.getElementById("oct").innerHTML = txt;

        }
    }
    
    else {
        document.getElementById("oct").innerHTML = 0;
    }

}



//decimal to hexadecimal
function DtoH (){
    var dcm,i,tab=[];
    var txt='';
    
    dcm=document.getElementById("dcm3").value;
    
    if (dcm>0){
        i=0;
        while(dcm>0){
            tab[i]= dcm % 16 ;
            dcm=Math.floor(dcm/16);
            i++;

            
            


            
        }
        for(j=i-1;j>=0;j--){
            if (tab[j]==10) {
                tab[j]='A';
            }
                
            else if(tab[j]==11){
                tab[j]='B';
            }
            else if(tab[j]==12){
                tab[j]='C';
            }
            else if(tab[j]==13){
                tab[j]='D';
            }
            else if(tab[j]==14){
                tab[j]='E';
            }
            else if(tab[j]==15){
                tab[j]='F';
            }

            txt = txt + tab[j];
            document.getElementById("hexadcm").innerHTML = txt;

        }
    }
    
    else {
        document.getElementById("hexadcm").innerHTML = 0;
    }

}





function remove_matrix (id){
    
    if ( document.getElementById(id + "_mini") )
        document.getElementById(id + "_mini" ).remove();
  
}



function print_matrix (r,c,tab,id){
    if(tab!=null){
        var f;
        //remove_matrix (id);
        var div=document.createElement("div");
        div.id= id+"_mini" ;
        div.className="matrix";

        document.getElementById(id).appendChild(div);
        k=document.createElement("p");
        div.appendChild(k);
        var s='';
        for(var i=0;i<r;i++){

            for(var j=0;j<c;j++){
                if(Number.isFinite(tab[i][j]*1))
                    f=(tab[i][j]*1).toFixed(3);
                else   
                    f=tab[i][j];

                s=s+ f+"&nbsp;&nbsp;&nbsp;";    
            }
            if(i!=r-1)
                s=s+"<br><br>";
        }
        k.innerHTML = s;
    }
}

function MplusM (A,B) {
    if (A && B){
        A_r=A.length;
        A_c=A[0].length;
        B_r=B.length;
        B_c=B[0].length;
        var Msum=[];
        for (var i=0;i<A_r;i++){
            Msum.push([]);
            Msum[i].push(new Array(A_c));
            for (var j=0;j<A_c;j++){
                Msum[i][j]=(Number(A[i][j])+Number(B[i][j]));
            }
        }
        return Msum;
          
    }
    else {
        var A = get_matrix("A");
        var B = get_matrix("B");
        A_r=A.length;
        A_c=A[0].length;
        B_r=B.length;
        B_c=B[0].length;
        if (A_r == B_r && A_c == B_c){
            var tab= MplusM (A,B);
            r=tab.length;
            c=tab[0].length;
            var tag =document.getElementById("ADD_matrix");
            tag.innerHTML = "";
            //tag.appendChild(document.createTextNode("This is a the result."));
            print_matrix (r,c,tab,"ADD_matrix");

            
            
        }
        else {
            document.getElementById("ADD_matrix").innerHTML = "Matrices must be of the same size.";
            
            //alert("Matrices must be of the same size.") ;
            
        }
    }
    
}

function MminusM (A,B) {
    if (A && B){
        A_r=A.length;
        A_c=A[0].length;
        B_r=B.length;
        B_c=B[0].length;
        var Msub=[];
        for (var i=0;i<A_r;i++){
            Msub.push([]);
            Msub[i].push(new Array(A_c));
            for (var j=0;j<A_c;j++){
                Msub[i][j]=(Number(A[i][j]) - Number(B[i][j]));
            }
        }
        return Msub;
         
    }
    else {
        var A = get_matrix("A");
        var B = get_matrix("B");
        A_r=A.length;
        A_c=A[0].length;
        B_r=B.length;
        B_c=B[0].length;
        if (A_r == B_r && A_c == B_c){
            var tab= MminusM (A,B);
            r=tab.length;
            c=tab[0].length;
            document.getElementById("SUBS_matrix").innerHTML = "";
            print_matrix (r,c,tab,"SUBS_matrix");
        }
        else {
            document.getElementById("SUBS_matrix").innerHTML = "Matrices must be of the same size.";
            //alert("Matrices must be of the same size.") ;
        }  
    }
}

function MtimesM (A,B) {
    if (A && B){
        A_r=A.length;
        A_c=A[0].length;
        B_r=B.length;
        B_c=B[0].length;
        var Mmult=[];
        var sum=0;
        for (var i=0;i<A_r;i++){
            Mmult.push([]);
            Mmult[i].push(new Array(B_c));

            for (var j=0;j<B_c;j++){
                sum=0;
                for (var y=0;y<A_c;y++){
                    sum+= Number(A[i][y]) * Number(B[y][j]);

                }
                Mmult[i][j]=sum;
            }
        }
        return Mmult;
          
    }
    else {
        var A = get_matrix("A");
        var B = get_matrix("B");
        A_r=A.length;
        A_c=A[0].length;
        B_r=B.length;
        B_c=B[0].length;
        
        if (A_c == B_r){

            var tab= MtimesM (A , B );
            r=tab.length;
            c=tab[0].length;
            document.getElementById("MULTI_matrix").innerHTML = "";
            print_matrix (r,c,tab,"MULTI_matrix");
        }
        else {
            document.getElementById("MULTI_matrix").innerHTML = "The number of columns in A should be equal to the number of rows in B.";
            //alert("The number of columns in A should be equal to the number of rows in B.") ;
        } 
    }
    
}


function Rmtopow(tab ,num) {
    if (tab && num){
        r=tab.length;
        c=tab[0].length;

        if (num>0){
            var R=tab;

            for (var i=0;i<num-1;i++){
                R=MtimesM (R,tab);
            }
            
        }
        else if (num==0){
            var R=[];
            for (var i=0;i<r;i++){
                R.push([]);
                R[i].push(new Array(c));

                for (var j=0;j<c;j++){
                    if (i==j)
                        R[i][j]=1;
                    else 
                        R[i][j]=0;
                }

            }
        }
        else {
            var R=inverse (tab);

            for (var i=0;i<Math.abs(num)-1;i++){
                R=MtimesM (R,inverse (tab));
            }
        }
        return R;
            
        
            
    }
    else {
        var mylist = document.getElementById("myList11");
        var mat_option =mylist.options[mylist.selectedIndex].text;
    
        var t= get_matrix(mat_option);

        r=t.length;
        c=t[0].length;
        if (r==c){
            var num=document.getElementById("power").value;
            if(num<0 && deto(t)==0){
                document.getElementById("R_mat_topow").innerHTML = "the matrix must be inversible ";
            }
            else{
                var tab= Rmtopow (t,num);
                r=tab.length;
                c=tab[0].length;
                document.getElementById("R_mat_topow").innerHTML = "";
                print_matrix (r,c,tab,"R_mat_topow");
            }
        }
        else {
            document.getElementById("R_mat_topow").innerHTML = "the matrix must be square";
            //alert("the matrix must be square");
        }
    }

}


function get_matrix(mat){
    var i,a,j,m=[],n=[],t='',tab=[];
    var r;
    var c;
    
    if (mat=="A"){
        n=document.getElementById("matrix_A").value;
    }
    else if (mat=="B") {
        n=document.getElementById("matrix_B").value;
    }
    
    //document.getElementById("p").innerHTML = n;
    
    
    
    for (j=0,i=0;i<n.length;i++){
        if (n[i]!=' ' &&  n[i]!='\n' ){
            t=t+n[i];
        }

        else {
            if (t!=''){
            
                m[j]=t;
                j++;
                t='';

                
            }
            if( m[0] && n[i] =='\n' &&  n[i+1] && n[i+1]!='\n' && n[i+1]!=' ' ){
                
                m[j]="_";
                j++;
            }

            
        }
    }
    
    if (t!=''){
        m[j]=t;  
    }
    


    for (var max=0,v=0,k=0,i=0;i<m.length;i++){
        if (m[i]!="_"){

            k++;
        }
        else {
            if (k>max){
                max=k;
            }
            v++;
            k=0;
        }
    }
    if (k>max){
        max=k;
    }
    //if (m[m.length - 1]!="_"){
        v++;

    //}
    
    //document.getElementById("MAT").innerHTML = m;
    r=v;
    c=max;
    for(a=0,i=0;i<r;i++){
        tab.push([]);
        tab[i].push(new Array(c));
        for(j=0;j<c;j++){
            if(m[a] && m[a]!="_"){
                tab[i][j]=eval(m[a]);
                a++;
                
            }
            else {
                
                tab[i][j]=eval("0");
            }
            
        }
        a++;
    }
    
    
    return tab;
    
}

function MStrtoMNum (r,c,tab){
    var Matrix=[];
    for(var i=0;i<r;i++){
        Matrix.push([]);
        Matrix[i].push(new Array(c));
        for(var j=0;j<c;j++){
            
            Matrix[i][j]=Number(tab[i][j]);
        }
        
    }
    return Matrix;
}
function MNumtoMStr (r,c,Matrix){
    var tab=[];
    for(var i=0;i<r;i++){
        tab.push([]);
        tab[i].push(new Array(c));
        for(var j=0;j<c;j++){
            
            tab[i][j]=Matrix[i][j].toString();
        }
        
    }
    return tab;
}

function multiply(n,tab){
    
    if (n && tab){
        var r=tab.length;
        var c=tab[0].length;
        for(i=0;i<r;i++){
        
            for(j=0;j<c;j++){
                
                tab[i][j]=(tab[i][j]*n);
            }  
        }
        return tab;
    }
    else {
        var mylist = document.getElementById("myList1");
        var mat_option =mylist.options[mylist.selectedIndex].text;
    
        var Matrix= get_matrix(mat_option);
        var r=Matrix.length;
        var c=Matrix[0].length;
        var num=document.getElementById("multi").value;
        var tag=document.getElementById("NumXMat");
        tag.innerHTML = "";
        tag.appendChild(document.createTextNode(num+"   *   "+mat_option+"  =   "));

        
        
        for(i=0;i<r;i++){
            
            for(j=0;j<c;j++){
                
                Matrix[i][j]=(Matrix[i][j]*num);
            }
            
        }
        
        print_matrix (r,c,Matrix,"NumXMat");
    }  
}


function determinant() {
    var mylist = document.getElementById("myList2");
    var mat_option =mylist.options[mylist.selectedIndex].text;

    var Matrix= get_matrix(mat_option);
    var r=Matrix.length;
    var c=Matrix[0].length;
    
    
    if (r==c){
        document.getElementById("matrix_determinant").innerHTML ="det("+ mat_option +") = " +  deto(Matrix);

    }
    else{
        document.getElementById("matrix_determinant").innerHTML = "the matrix must be square";
        //alert("the matrix must be square");

    }
}

function deto(t){
    var mini;
    var det=0;
    var indice=-1;
    if (t.length>1){
        for(var i=0,j=0;j<t.length;j++){
            mini=mini_mat (t,i,j);
            indice=indice*(-1);
            det=det + indice*t[i][j]*deto(mini);
        }
    }
    else {
        det=t;
    }
    
    return det;

}


function minor_mat (t){
    if (t){
        var r=t.length;
        var c=t[0].length;
        if(r==c){
            var tab=[];
            for(var i=0;i<r;i++){
                tab.push([]);
                tab[i].push(new Array(c));
                for(var j=0;j<c;j++){
                    
                    tab[i][j]=Math.pow(-1,i+j)*deto(mini_mat (t,i,j));
                }
                
            }
            return tab;
        }
        else {
            document.getElementById("minors").innerHTML = "the matrix must be square";
            //alert("the matrix must be square");
        }
    }
    else {
        var mylist = document.getElementById("myList4");
        var mat_option =mylist.options[mylist.selectedIndex].text;
    
        var t= get_matrix(mat_option);
        var r=t.length;
        var c=t[0].length;
        if(r==c){
        
            document.getElementById("minors").innerHTML = "";
            print_matrix (r,c,minor_mat (t),"minors");
        }
        else {
            document.getElementById("minors").innerHTML = "the matrix must be square";
            //alert("the matrix must be square");
        }

    }
    
}
function mini_mat (m,x,y){
    var t=[],r=[],c=[];
    var len=m.length;
    
    for (var a=0,i=0;i<len;i++){
        if (i!=x){
            r[a]=i;
            a++;
        }      
    }
    for (a=0,i=0;i<len;i++){
        if (i!=y){
            c[a]=i;
            a++;
        }      
    }
    if (len>1){
        for(i=0;i<len-1;i++){
            t.push([]);
            t[i].push(new Array(len-1));
            for(var j=0;j<len-1;j++){
                
                t[i][j]=m[r[i]][c[j]];
                
            }
            
        }
    }
    else {
        t=m;
    }   
    //document.getElementById("matrix_determinant").innerHTML = t;
    
    return t;

}

function transpose (t){
    if (t){
        var r=t.length;
        var c=t[0].length;
        var tab=[];
        for(var i=0;i<c;i++){
            tab.push([]);
            tab[i].push(new Array(r));
            for(var j=0;j<r;j++){
                
                tab[i][j]=t[j][i];
                
            }   
        }

        return tab;

    }
    else {
        var mylist = document.getElementById("myList3");
        var mat_option =mylist.options[mylist.selectedIndex].text;
    
        var t= get_matrix(mat_option);
        var r=t.length;
        var c=t[0].length;
        document.getElementById("transpose").innerHTML="";
        print_matrix (c,r,transpose (t),"transpose");
    }
    
}


function inverse (t){
    if (t){

        var tab=[];
        tab=multiply(1/deto(t),transpose(minor_mat(t)));
        return tab;
    
        
    }
    else {
        var mylist = document.getElementById("myList5");
        var mat_option =mylist.options[mylist.selectedIndex].text;
    
        var t= get_matrix(mat_option);
        var r=t.length;
        var c=t[0].length;

        if(r==c && deto(t)!=0){
            document.getElementById("inverse").innerHTML = "";
            print_matrix (r,c,inverse(t),"inverse");
        }
        else {
            document.getElementById("inverse").innerHTML = "the matrix is not inversible";
            //alert("the matrix is not inversible");
        }
        

    }
    
}


function Gause(t){
    if (t){
        var r=t.length;
        var c=t[0].length;
        
        
        for (l=0;l<r-1;l++){
            var k,i=l+1,intro=[];
            while (t[l][l]==0 && i<r){
                intro=t[l];
                t[l]=t[i];
                t[i]=intro;
                i++;

            }


            for (i=l+1;i<r;i++){
                k=t[i][l];
                if(k!=0){
                    for (var j=l;j<c;j++){
                        t[i][j]=(t[i][j]-(t[l][j]*k/t[l][l]));
                    }
                }
            }
        }
        return t;
        
    }
    else {
        var mylist = document.getElementById("myList6");
        var mat_option =mylist.options[mylist.selectedIndex].text;
    
        var t= get_matrix(mat_option);
        var r=t.length;
        var c=t[0].length;
        document.getElementById("Gause").innerHTML = "";
        print_matrix (r,c,Gause(t),"Gause");

    }
}





function Sigma (n,i,t,k){
    s=0;
    for (k=i;k<=n;k++){
        s+=t;
    }
    return s;
}
function is_def_positive (A){
    var r=A.length;
    var c=A[0].length;
    var n=true;
    if(r==c){
        for (var i=0;i<r;i++){
            if (A[i][i]<0){
                n=false;
            }
            
        }
        
        return n;
            
    }
}
function is_symmetric (A){
    var r=A.length;
    var c=A[0].length;
    var n=true;
    for (var i=0;i<r;i++){
        for (var j=0;j<c;j++){
            if (A[i][j]!=A[j][i]){
                n=false;
            }
            
        }

    }
    return n;
}



function cholesky (A){
    
    if (A){
        
        var l=[];
        var n=A.length;
        for(var i=0;i<n;i++){
            l.push([]);
            l[i].push(new Array(n));
            for(var j=i+1;j<n;j++){
                l[i][j]=0;
                
            }   
        }
        l[0][0]=Math.sqrt(A[0][0]);
        for (i=1;i<n;i++){
            l[i][0]=(A[0][i]/l[0][0]);
        }
        for (j=1;j<n-1;j++){
            s=0;
            for (var k=0;k<j;k++){
                s+=Math.pow(l[j][k],2);
            }
            l[j][j]=Math.sqrt(A[j][j]-s);

            for (i=j+1;i<n;i++){
                s=0;
                for (var k=0;k<j;k++){
                    s+=l[j][k]*l[i][k];
                }
                l[i][j]=((A[j][i]-s)/l[j][j]);

            }

        }
        s=0;
            for (var k=0;k<n-1;k++){
                s+=Math.pow(l[n-1][k],2);
            }
        l[n-1][n-1]=Math.sqrt(A[n-1][n-1]-s);
        
        var nop=false;
        for (var i=0;i<n;i++){
            for (var j=0;j<n;j++){
                if(Number.isNaN(l[i][j])==true){
                    nop=true;
                    break;
                }
                    

            }
        }

        if (nop==true){
            alert("the matrix is not positive definite");
            return null;
        }
        else   
            return l;
        
    }
    else {
        var mylist = document.getElementById("myList7");
        var mat_option =mylist.options[mylist.selectedIndex].text;
    
        var t= get_matrix(mat_option);
        if (is_symmetric (t) && is_def_positive(t)){
            var r=t.length;
            var c=t[0].length;
            var l=cholesky(t);
            var tag=document.getElementById("cholesky");
            tag.innerHTML = "";

            print_matrix (r,c,t,"cholesky");
            tag.appendChild(document.createTextNode("   =   "));

            
            print_matrix (r,c,l,"cholesky");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (r,c,transpose(l),"cholesky");
        }
        
        else {
            if (!is_def_positive(t)) {
                document.getElementById("cholesky").innerHTML = "the matrix is not positive definite";
                //alert("the matrix is not symmetric");
            }
            else
                document.getElementById("cholesky").innerHTML = "the matrix is not symetric";
                //alert("the matrix is not positive definite");
        }

    }
}





function LU_Decomposition(A,mat) {
    
    if (A,mat){

        var lower=[];
        var upper=[];
        var n=A.length;
        var zero=0,one=1;
        for(var i=0;i<n;i++){
            lower.push([]);
            lower[i].push(new Array(n));
            for(var j=i+1;j<n;j++){
                lower[i][j]=zero;
                
            }   
        }
        for(i=0;i<n;i++){
            upper.push([]);
            upper[i].push(new Array(n));
            for(j=0;j<i;j++){
                upper[i][j]=zero;
                
            }   
        }
        // Decomposing matrix into Upper and Lower 
        // triangular matrix 
        for (i = 0; i < n; i++) { 

            // Upper Triangular 
            for (k = i; k < n; k++) { 

                // Summation of L(i, j) * U(j, k) 
                var sum = 0; 
                for (j = 0; j < i; j++) 
                    sum += (lower[i][j] * upper[j][k]); 

                // Evaluating U(i, k) 
                upper[i][k] = (A[i][k] - sum); 
            } 

            // Lower Triangular 
            for (k = i; k < n; k++) { 
                if (i == k) 
                    lower[i][i] = one; // Diagonal as 1 
                else { 

                    // Summation of L(k, j) * U(j, i) 
                    sum = 0; 
                    for (j = 0; j < i; j++) 
                        sum += (lower[k][j] * upper[j][i]); 

                    // Evaluating L(k, i) 
                    lower[k][i] = ((A[k][i] - sum) / upper[i][i]); 
                } 
            } 
        } 
        
        if(mat=="L")
            return lower;
        else if (mat=='U')
            return upper;
        else
            return null;
        
            


    }
    else {
        var mylist = document.getElementById("myList8");
        var mat_option =mylist.options[mylist.selectedIndex].text;
    
        var A= get_matrix(mat_option);
        var r=A.length;
        var c=A[0].length;
        if (r==c){
            

            var tag=document.getElementById("UL");
            tag.innerHTML = "";

            print_matrix (r,c,A,"UL");
            tag.appendChild(document.createTextNode("   =   "));

            
            print_matrix (r,c,LU_Decomposition(A,'L'),"UL");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (r,c,LU_Decomposition(A,'U'),"UL");
        }
        else {
            document.getElementById("UL").innerHTML = "the matrix in not square";
            //alert ("the matrix in not square");
        }
    }
    
    
    
    
} 


function mysearch() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("mySearch");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myMenu");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        } else {
        li[i].style.display = "none";
        }
    }
}

function panel(id1,id2){

    document.getElementById(id2).classList.add("active");
    var panel = document.getElementById(id1);
    /*if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
    } else {*/
        
        panel.style.maxHeight = panel.scrollHeight + "px";
    //} 
}




function create_system() {
    var num =document.getElementById("unknowns").value;
    
    if(num>1){
        var s='';
        for(var i=0;i<num;i++){
            
            for(var j=0;j<num;j++){
                txt= "<input id='A_"+i+"_"+j+"' type='number' value='2'/>";
                s=s+"&nbsp;&nbsp;&nbsp;"+txt+  " X"+"<sub>"+(j+1)+"</sub>";
                if (j==num-1){
                    txt= "<input id='b_"+i+"' type='number' value='1' />";
                    s=s+"&nbsp;&nbsp;&nbsp;"+"="+"&nbsp;&nbsp;&nbsp;"+txt;
                }
                else {
                    s=s+"&nbsp;&nbsp;&nbsp;"+"+";
                }
                
            }
            s=s+"<br><br>";
        }
        document.getElementById("the_system").innerHTML = s;
        document.getElementById("A_"+2+"_"+2).value=4;
    }
}

function get_system(index) {
    
    var num =document.getElementById("unknowns").value;
    var A=[];
    var b=[];
    var X=[];
    var Y=[];
    
    for (i=0;i<num;i++){
        
        b.push([]);
        b[i].push(new Array(1));
        b[i][0]=document.getElementById("b_"+i).value;
        X.push([]);
        X[i].push(new Array(1));
        X[i][0]="X"+"<sub>"+(i+1)+"</sub>";

        Y.push([]);
        Y[i].push(new Array(1));
        Y[i][0]="Y"+"<sub>"+(i+1)+"</sub>";

        A.push([]);
        A[i].push(new Array(num));
        
        for (j=0;j<num;j++){
            
            A[i][j]=document.getElementById("A_"+i+"_"+j).value;
            
        }   
    }
    
    var tag=document.getElementById("GET_sys");
    tag.innerHTML = "";

    print_matrix (num,num,A,"GET_sys");
    tag.appendChild(document.createTextNode("   *   "));

    
    print_matrix (num,1,X,"GET_sys");
    tag.appendChild(document.createTextNode("   =   "));

    print_matrix (num,1,b,"GET_sys");
    
    if (index=="A")
        return A;
    else if (index=="b")
        return b;
    else if (index=="X")
        return X;
    else if (index=="Y")
        return Y;

}

function sys_inverse(A , b){
    if (A && b){

        return MtimesM (inverse(A) , b);
        
        
    }
    else {
        
        var A=get_system("A");
        var b=get_system("b");
        var X=get_system("X");
        if (deto(A)!=0){
            
            var rslt=sys_inverse(A , b) ;
            
            var r=rslt.length;
            var c=rslt[0].length;

            var tag=document.getElementById("sys_inverse");
            tag.innerHTML = "";

            print_matrix (X.length,1,X,"sys_inverse");
            tag.appendChild(document.createTextNode("   =   "));

            print_matrix (A.length,A[0].length,inverse( A ),"sys_inverse");
    
            tag.appendChild(document.createTextNode("   *   "));

            print_matrix (b.length,1,b,"sys_inverse");

            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (r,c,rslt,"sys_inverse");
        }
        else {
            document.getElementById("sys_inverse").innerHTML = "the matrix is not inversible";
        }
        
    }
        
}



function sys_cramer(A,b){
    if (A && b){
        
        var n=A.length;
        var X=[];
        var Q=[];
        const C=A;
        
        for (var k=0;k<n;k++){
            X.push([]);
            X[k].push(new Array(1));
            //document.getElementById("d").innerHTML = Q;
            //Q=arrayClone( A );
            Q = JSON.parse(JSON.stringify(A));
            
            
            for (var i=0;i<n;i++) {
                
                Q[i][k]=b[i][0];
            }

            X[k][0]=(deto(Q)/deto(A));
            
        }

        return X ;

        
    }
    else {
        
        const A =get_system("A");
        const b= get_system("b");

        if( deto(A)!=0 ){
            var rslt= sys_cramer(A , b) ;
            var r=rslt.length;
            var c=rslt[0].length;
            var X=get_system("X");

            var tag=document.getElementById("CRAMER");
            tag.innerHTML = "";
            
            print_matrix (X.length,1,X,"CRAMER");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (r,c,rslt,"CRAMER");
        }
        else {
            document.getElementById("CRAMER").innerHTML = "the matrix is not inversible";
        }

    }
}

function arrayClone( arr ) {
    
    var i, copy;

    if( Array.isArray( arr ) ) {
        copy = arr.slice( 0 );
        for( i = 0; i < copy.length; i++ ) {
            copy[ i ] = arrayClone( copy[ i ] );
        }
        return copy;
    } else if( typeof arr === 'object' ) {
        throw 'Cannot clone array containing an object!';
    } else {
        return arr;
    }

}

function diagonalo (A,b){
    var x=[];
    var n=A.length;
    for (var i=0;i<n;i++){
        x[i]=b[i]/A[i][i];
    }
    return x;
}

function trianglsup (A,b){
    var x=[],s;
    var n=A.length;
    for (var k=0;k<n;k++){
        x.push([]);
        x[k].push(new Array(1));
    }

    x[n-1][0]=b[n-1][0]/A[n-1][n-1];
    for (var i=n-2;i>=0;i--){
        s=0;
        for (var j=i+1;j<n;j++){
            s+=A[i][j]*x[j][0];
        
        }
        x[i][0]=(b[i][0]-s)/A[i][i];
    }
    return x;
}

function trianglinf (A,b){
    var x=[],s;
    var n=A.length;
    for (var k=0;k<n;k++){
        x.push([]);
        x[k].push(new Array(1));
    }
    x[0][0]=b[0][0]/A[0][0];
    for (var i=1;i<n;i++){
        s=0;
        for (var j=0;j<i;j++){
            s+=A[i][j]*x[j][0];
        
        }
        x[i][0]=(b[i][0]-s)/A[i][i];
    }
    return x;
}


function sys_gause(t,b,index){
    if (t && b){  
        var r=t.length;
        var c=t[0].length;
        
        
        for (l=0;l<r-1;l++){
            var k,i=l+1,intro=[];
            while (t[l][l]==0 && i<r){
                intro=t[l];
                t[l]=t[i];
                t[i]=intro;
                i++;

            }
            
            for (i=l+1;i<r;i++){
                k=t[i][l];
                if(k!=0){
                    b[i][0]-=((b[l][0]*k/t[l][l]));
                    for (var j=l;j<c;j++){
                        
                        t[i][j]=(t[i][j]-(t[l][j]*k/t[l][l]));
                    }
                }
            }
        }
        
        //document.getElementById("d").innerHTML = math.fraction(0.33333333333333);
        var X= trianglsup(t,b);
        if(index=="A")
            return t;
        else if (index=="b")
            return b ;
        else
            return X ;
        
    }
    else {
        
        var A =get_system("A");
        var b= get_system("b");

        
        if( deto(A)!=0 ){
            var rslt= sys_gause(A , b) ;
            var r=rslt.length;
            var c=rslt[0].length;
            var X=get_system("X");

            var tag=document.getElementById("sys_gause");
            tag.innerHTML = "by using Gausian elimination the system will be simplified to this :";
            tag.appendChild(document.createElement("br"));
            print_matrix (r,r,sys_gause(A , b,"A"),"sys_gause");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (X.length,1,X,"sys_gause");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (X.length,1,sys_gause(A , b ,"b"),"sys_gause");
         
            tag.appendChild(document.createElement("br"));

            print_matrix (X.length,1,X,"sys_gause");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (r,c,rslt,"sys_gause");
        }
        else {
            document.getElementById("sys_gause").innerHTML = "the matrix is not inversible";
        }

        
    }
}



function sys_cholesky(A,b,index){
    if (A && b){  
        
        
        //document.getElementById("d").innerHTML = transpose(cholesky (A));
        var Y= trianglinf(cholesky (A),b);
        //document.getElementById("d").innerHTML = Y;
        var X= trianglsup(transpose(cholesky (A)),Y);
        //document.getElementById("d").innerHTML = X;
        if(index=="Y")
            return Y;
        else
            return X ;
        
    }
    else {
        
        var A =get_system("A");
        var b= get_system("b");



        if (is_symmetric (A) && is_def_positive(A) && deto(A)!=0 ){
            var rslt= sys_cholesky(A , b) ;
            var sub_rslt=sys_cholesky(A , b, "Y");
            
            var X=get_system("X");
            var Y=get_system("Y");
            var l=cholesky(A);
            var r=l.length;
            var c=l[0].length;
            var tag=document.getElementById("sys_cholesky");
            tag.innerHTML = "by using cholesky's method the system will be simplified to this :";
            tag.appendChild(document.createElement("br"));
            
            

            
            print_matrix (r,c,l,"sys_cholesky");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (r,c,transpose(l),"sys_cholesky");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (X.length,1,X,"sys_cholesky");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (b.length,1,b,"sys_cholesky");

            tag.appendChild(document.createElement("br"));

            tag.appendChild(document.createTextNode("let's put :"));
            print_matrix (Y.length,1,Y,"sys_cholesky");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (r,c,transpose(l),"sys_cholesky");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (X.length,1,X,"sys_cholesky");

            tag.appendChild(document.createElement("br"));
            tag.appendChild(document.createTextNode("thus :"));
            print_matrix (r,c,l,"sys_cholesky");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (Y.length,1,Y,"sys_cholesky");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (b.length,1,b,"sys_cholesky");

            tag.appendChild(document.createElement("br"));
            tag.appendChild(document.createTextNode("so :"));
            print_matrix (Y.length,1,Y,"sys_cholesky");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (Y.length,1, sub_rslt ,"sys_cholesky");

            tag.appendChild(document.createElement("br"));
            
            tag.appendChild(document.createTextNode("finaly :"));
            print_matrix (r,c,transpose(l),"sys_cholesky");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (X.length,1,X,"sys_cholesky");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (Y.length,1, sub_rslt ,"sys_cholesky");

            tag.appendChild(document.createElement("br"));
            print_matrix (X.length,1,X,"sys_cholesky");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (rslt.length,rslt[0].length,rslt,"sys_cholesky");

        }
        
        else {

            if (!is_def_positive(A)) {
                document.getElementById("sys_cholesky").innerHTML = "the matrix is not positive definite";
                //alert("the matrix is not symmetric");
            }
            else if(deto(A)==0)
                document.getElementById("sys_cholesky").innerHTML = "the matrix is not inversible";
            else
                document.getElementById("sys_cholesky").innerHTML = "the matrix is not symetric";
                //alert("the matrix is not positive definite");
        }






    }
}

function sys_LU(A,b,index){
    if (A && b){  
        
        
        
        var Y= trianglinf(LU_Decomposition(A,'L'),b);
        
        var X= trianglsup(LU_Decomposition(A,'U'),Y);
        
        
        
        if (index =="A")
            return A;
        else if (index=="b")
            return b ;
        else if (index=="L")
            return LU_Decomposition(A,'L');
        else if (index=="U")
            return LU_Decomposition(A,'U');
        else if (index=="Y")
            return Y;
        else
            return X ;
        
        
    }
    else {
        
        var A =get_system("A");
        var b= get_system("b");
        var r=A.length;
        var c=A[0].length;
        if ( deto(A)!=0 ){
            var rslt= sys_LU (A , b) ; ;
            var sub_rslt= sys_LU (A , b, "Y");
            
            var X=get_system("X");
            var Y=get_system("Y");
            var L=LU_Decomposition(A,'L');
            var U=LU_Decomposition(A,'U')
            
            var tag=document.getElementById("sys_LU");
            tag.innerHTML = "by using cholesky's method the system will be simplified to this :";
            tag.appendChild(document.createElement("br"));
            
            

            
            print_matrix (r,c,L,"sys_LU");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (r,c,U,"sys_LU");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (X.length,1,X,"sys_LU");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (b.length,1,b,"sys_LU");

            tag.appendChild(document.createElement("br"));

            tag.appendChild(document.createTextNode("let's put :"));
            print_matrix (Y.length,1,Y,"sys_LU");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (r,c,U,"sys_LU");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (X.length,1,X,"sys_LU");

            tag.appendChild(document.createElement("br"));
            tag.appendChild(document.createTextNode("thus :"));
            print_matrix (r,c,L,"sys_LU");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (Y.length,1,Y,"sys_LU");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (b.length,1,b,"sys_LU");

            tag.appendChild(document.createElement("br"));
            tag.appendChild(document.createTextNode("so :"));
            print_matrix (Y.length,1,Y,"sys_LU");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (Y.length,1, sub_rslt ,"sys_LU");

            tag.appendChild(document.createElement("br"));
            
            tag.appendChild(document.createTextNode("finaly :"));
            print_matrix (r,c,U,"sys_LU");
            tag.appendChild(document.createTextNode("   *   "));
            print_matrix (X.length,1,X,"sys_LU");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (Y.length,1, sub_rslt ,"sys_LU");

            tag.appendChild(document.createElement("br"));
            print_matrix (X.length,1,X,"sys_LU");
            tag.appendChild(document.createTextNode("   =   "));
            print_matrix (rslt.length,rslt[0].length,rslt,"sys_LU");

        }
        
        else {
            document.getElementById("sys_LU").innerHTML = "the matrix is not inversible";

        }
    }
}
