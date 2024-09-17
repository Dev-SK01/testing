test('Mock test Implementation' , ()=>{
    const mockFn = jest.fn((x) => x + 10)
    expect(mockFn(1)).toBe(11);
    expect(mockFn).toHaveBeenCalledWith(1)
})