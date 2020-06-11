// 배열, 슬라이스 모두 연속된 메모리 공간을 순차적으로 이용하는 자료구조
// 배열이 직접 사용되는 경우보단 주로 슬라이스를 이용해 간접적으로 배열을 이용하는 경우가 많음 

// 배열 

package main

import "fmt"

func main(){
	Example_array()
	Example_slicing()
}

func Example_array() {
	fruits := [3]string{"사과", "바나나", "토마토"}
	for _, fruit := range fruits {
		fmt.Printf("%s는 맛있다.\n", fruit)
	}
	// Output:
	// .
}

func Example_slicing() {
	nums := []int{1,2,3,4,5}
	fmt.Println(nums)
	fmt.Println(nums[1:3])
	fmt.Println(nums[2:])
	fmt.Println(nums[:3])
}


// 슬라이스 
// 배열보단 더 유연한 구조 => 배열은 크기가 자료형에 고정이 되어 있음
// 즉, [3]string 자료형은 3개의 문자열로 구성된 배열 자료형 
// 슬라이스는 - 길이와 용량을 갖고 있고 길이가 변할 수 있는 자료형 

